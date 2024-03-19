import {Account, Profile} from 'next-auth';
import connectDB from '../mongodb/connectDB';
import UserProfile from "../models/userProfile";
import { getServerSession } from 'next-auth/next';
import { nextauthOptions } from '@/lib/auth/options';

export async function getUserSession() {
    const session = await getServerSession(nextauthOptions)
    return ({ session })
  }

interface AltProfile extends Profile {
    picture?: string;
    avatar_url?: string;
    avatar?: string;
    id?: string;
}

interface SignInWithProviderProps {
    account: Account;
    profile: AltProfile;
}
export async function signInWithProvider({account, profile}: SignInWithProviderProps){
    await connectDB();
    const user = await UserProfile.findOne({email: profile.email});
    if(user){
        return user;
    }

    let profileImage: string | undefined ;
    if (account.provider == 'google'){
        profileImage = profile.picture ;
    }
    else if (account.provider == 'github'){
        profileImage = profile.avatar_url;
    }
    else if (account.provider == 'discord'){
        profileImage = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}`;
    }
    else{
        profileImage = "https://static.vecteezy.com/system/resources/previews/005/544/770/non_2x/profile-icon-design-free-vector.jpg";
    }


    // const profileImage = profile.picture || profile.avatar_url|| `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}/.webp` || '';
    const newUser = await UserProfile.create({
        name: profile.email?.split('@')[0], // default name is the email prefix (before @
        email: profile.email,
        image: profileImage,
        role: 'user',
        provider: account.provider
    });
    await newUser.save();
    return true
}

interface GetUserByEmailParams {
    email: string | undefined;
  }
  
  export async function getUserByEmail({
    email
  }: GetUserByEmailParams) {
    await connectDB()
  
    const user = await UserProfile.findOne({email})
  
    if (!user) {
      throw new Error ("User does not exist!")
    }
  
    console.log("NHIII2")
    return {...user._doc, _id: user._id.toString()}
  }

