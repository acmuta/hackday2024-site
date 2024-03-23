"use client";
import Image from "next/image";
import { iceland } from "../ui/fonts";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import NavItem from "./NavItem";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

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
				className={`hidden md:flex flex-row ${iceland.className} items-start justify-start py-0 px-0 box-border md:gap-5 gap-2 max-w-full z-10`}
			>
				<NavItem title="APPLY" href="/form" />
				<NavItem title="DASHBOARD" href="/leaderboard" />
				<NavItem title="FAQ" href="/faq" />
				<NavItem title="SCHEDULE" href="/schedule" />

				{session ? (
					<NavItem title="SIGN OUT" href="" onClick={handleSignOut} border />
				) : (
					<NavItem title="SIGN IN" href="" onClick={handleSignIn} border />
				)}
			</div>
			<div className="md:hidden flex">
				<Sheet>
					<SheetTrigger>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="32px"
							version="1.1"
							viewBox="0 0 32 32"
							width="32px"
						>
							<path
								fill={"#fff"}
								d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
							/>
						</svg>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle className="text-3xl font-bold text-start">HackDay 2024</SheetTitle>
							<SheetDescription>
								<div className="h-full w-full flex flex-col items-start justify-center text-2xl px-8 py-2">
									<Link href=""></Link>

									<Link href="/form">APPLY</Link>
									<Link href="/leaderboard">DASHBOARD</Link>
									<Link href="/faq">FAQ</Link>
									<Link href="/schedule">SCHEDULE</Link>

									{session ? (
										<Link href="" onClick={handleSignOut}>SIGN OUT</Link>
									) : (
										<Link href="" onClick={handleSignIn}>SIGN IN</Link>
									)}
								</div>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
