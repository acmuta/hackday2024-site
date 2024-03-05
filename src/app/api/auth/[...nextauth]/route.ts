import NextAuth from 'next-auth'
import { nextauthOptions } from '@/lib/auth/options'

const handler = NextAuth(nextauthOptions)

export { handler as GET, handler as POST }

// imports
// import NextAuth from 'next-auth'

// importing providers
// import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import clientPromise from '@/lib/mongodb/client'
// import { Adapter } from 'next-auth/adapters'

// const handler = NextAuth({
//   adapter: MongoDBAdapter(clientPromise) as Adapter,

//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     EmailProvider({
//       server: {
//         host: process.env.EMAIL_SERVER_HOST,
//         port: Number(process.env.EMAIL_SERVER_PORT),
//         auth: {
//           user: process.env.EMAIL_SERVER_USER,
//           pass: process.env.EMAIL_SERVER_PASSWORD,
//         },
//       },
//       from: process.env.EMAIL_FROM,
//     }),
//   ],
//   callbacks: {

//   },
// })

// export { handler as GET, handler as POST }
