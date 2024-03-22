import Link from "next/link";
import React from "react";

type Props = {
  title: string;
	href: string;
  border?: boolean
};

export default function NavItem({ title, href, border }: Props) {
	return (
		<Link
			href={href}
			className={`flex items-center justify-center cursor-pointer rounded-md text-white text-xl hover:bg-zinc-400 py-2 px-4 ${border ? "border" : ""} border-solid border-white hover:bg-gainsboro-200 hover:bg-opacity-40 hover:scale-105 transition-all`}
		>
			{title}
		</Link>
	);
}
