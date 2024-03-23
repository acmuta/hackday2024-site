import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { roboto } from "@/components/ui/fonts";
import "./globals.css";
import SessionWrapper from "@/lib/utils/SessionWrapper";
import { cn } from "@/lib/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackday UTA 2024",
  description: "Hackday UTA 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          style={{
            backgroundImage: 'url("/bg.webp")',
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundAttachment: "fixed",
            height: "100vh",
          }}
          className={cn(roboto.className, inter.className, "bg-[#0D1117] overflow-x-hidden")}
        >
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
