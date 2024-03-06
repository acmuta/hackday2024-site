import {Account, Profile} from 'next-auth';
import connectDB from '../mongodb/connectDB';
import UserProfile from "../models/profile";



interface SignInWithProviderProps {
    account: Account;
    profile: Profile;
}
export async function signInWithProvider({account, profile}: SignInWithProviderProps){
    await connectDB();
    const user = await UserProfile.findOne({email: profile.email});
    if(user){
        return user;
    }
    const newUser = await UserProfile.create({
        email: profile.email,
        name: profile.name,
        image: profile.image,
        role: 'user',
        provider: account.provider
    });
    await newUser.save();
    return true
}

