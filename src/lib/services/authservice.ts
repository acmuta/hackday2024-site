import { getServerSession } from 'next-auth/next'
import { Account, Profile } from 'next-auth'
import { redirect } from 'next/navigation'
import connectDB from '@/lib/utils/mongodb'
import User from '@/lib/models/user'
import { nextauthOptions } from '@/lib/auth/options'
import { Sign } from 'crypto'

export async function getUserSession() {
  const session = await getServerSession(nextauthOptions)
  return { session }
}

interface SignInWithOauthParams {
  account: Account
  profile: Profile
}

export async function signInWithOauth({
  account,
  profile,
}: SignInWithOauthParams) {
  await connectDB()
  const user = await User.findOne({ email: profile.email })
  if (user) {
    return true
  }
  const newUser = new User({
    email: profile.email,
    name: profile.name,
    image: profile.image, // profile.picture?
    provider: account.provider,
  })
  await newUser.save()
  return true
}

interface GetUserByEmailParams {
  email: string
}
export async function getUserByEmail({ email }: GetUserByEmailParams) {
  await connectDB()
  const user = await User.findOne({ email: email })
  if (!user) {
    throw new Error('User not found')
  }
  return { ...user._doc, _id: user._id.toString() }
}
