// imports
import { NextAuthOptions } from 'next-auth'

// importing providers
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

// MongoDB - adapters
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb/client'
import { Adapter } from 'next-auth/adapters'

// Mongoose stuff
import { signInWithOauth, getUserByEmail } from '@/lib/services/authservice'
import { profile } from 'console'

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
        console.log('Profile GH: ', profile)

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
        console.log('Profile Google: ', profile)

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
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  callbacks: {},
}
