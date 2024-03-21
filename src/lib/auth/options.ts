// imports
import { NextAuthOptions } from 'next-auth'

// importing providers
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import DiscordProvider from 'next-auth/providers/discord'

// MongoDB - adapters
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb/client'
import { Adapter } from 'next-auth/adapters'





import { signInWithProvider, getUserByEmail} from '../services/authservice'
import { isGeneratorFunction } from 'util/types'

// function MongoDBAdapter
export const nextauthOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    collections: {
      Users: 'users',
      Accounts: 'accounts',
      Sessions: 'sessions',
      VerificationTokens: 'verification_tokens',
    },
    databaseName: 'hackday',
  }) as Adapter,

  providers: [
    GithubProvider({
      profile(profile) {
        // console.log('Profile GH: ', profile)

        let userRole = 'user'
        return {
          ...profile,
          role: userRole,
        }
      },
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      profile(profile) {
        // console.log('Profile Google: ', profile)

        let userRole = 'user'
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    DiscordProvider({
        profile(profile) {

          let userRole = 'user'
          return {
            ...profile,
            role: userRole,
          }
        },
        clientId: process.env.DISCORD_CLIENT_ID as string,
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: Number(process.env.EMAIL_SERVER_PORT),
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],

callbacks: {
    async signIn({ account, profile , email}) {
        
        if (account && profile) {

            return await signInWithProvider({ account, profile });
        }
        return true;
    },
    // async redirect({url, baseUrl}) {
    //     if (url==="/"){
    //         return `${baseUrl}/`
    //     }
    //     return '/team'
    // },
   
 
    async session({ session, token }) {
      if (session.user?.email) {
       
          const userInfo = await getUserByEmail({email: session.user?.email});
        return {
            ...session,
            user: {
              name: userInfo.name,
              email: userInfo.email,
              _id: userInfo._id,
              role: userInfo.role,
              provider: userInfo.provider,
            image: userInfo.image,
            team: userInfo.team
            }
          }
        }
        return session;
      
}
}}
