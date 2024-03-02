import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github";
import { signInWithOauth, getUserByEmail } from "@/lib/services/authservice";

export const nextauthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    })
    
    
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // console.log({account, profile})
      if (account?.type === "oauth" && profile) {
        return await signInWithOauth({account, profile})
      }
      return true
    },
    async jwt({ token, trigger, session }) {
      
      if (trigger === "update") {
        token.name = session.name
      } else {
        if (token.email) {
          const user = await getUserByEmail({email: token.email})
          token.name = user.name
          token._id = user._id
          token.role = user.role
          token.provider = user.provider
        }
      }
      return token
    },
    async session({ session, token }) {

      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          _id: token._id,
          role: token.role,
          provider: token.provider
        }
      }
    }
  }
}