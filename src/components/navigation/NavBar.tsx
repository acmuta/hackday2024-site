"use client";
import Image from "next/image";
import { iceland } from "../ui/fonts";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import router from "next/router";
import NavItem from "./NavItem";

// import { Link as LinkScroll } from "react-scroll";

export default function Navbar() {
	const { data: session } = useSession();

	const handleSignIn = () => {
		signIn();
	};
	const handleSignOut = () => {
		signOut({ callbackUrl: "/", redirect: true });
	};
	return (
		<div className="sticky top-0 flex flex-row items-center justify-between max-w-full text-left text-xl text-white font-iceland py-4 px-8 z-20 bg-black backdrop-blur bg-opacity-40">
			<Link href="/" className="flex items-center justify-start space-x-3 ">
				<Image src={"/hackutalogo-1@2x.png"} width={52} height={52} alt="logo" />
				<div className="flex flex-col justify-center leading-5 text-2xl">
					<p className={`m-0 ${iceland.className}`}>HACKDAY</p>
					<p className={`m-0 ${iceland.className}`}>2024</p>
				</div>
			</Link>
			<div
				className={`flex md:flex-row flex-col ${iceland.className} items-start justify-start py-0 px-0 box-border md:gap-5 gap-2 max-w-full z-10`}
			>
				<NavItem title="APPLY" href="/form" />
				<NavItem title="DASHBOARD" href="/leaderboard" />
				<NavItem title="FAQ" href="/faq" />
				<NavItem title="SCHEDULE" href="/schedule" />

				{session ? (
					<NavItem title="SIGN OUT" href="/api/auth/signout" border/>
				) : (
					<NavItem title="SIGN IN" href="/api/auth/siagnin" border/>
				)}
			</div>
		</div>
	);
}
