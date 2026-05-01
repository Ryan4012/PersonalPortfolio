"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

import CardNav from "./CardNav";
import { link } from "fs";

    
export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const items = [
    {
      label: "Home",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "About", href: "/", ariaLabel: "About Company" },
        { label: "Resume", href: "/resume", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/#projects", ariaLabel: "Featured Projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#4A4458",
      textColor: "#fff",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/ryan-franson", ariaLabel: "LinkedIn" },
        { label: "GitHub", href: "https://github.com/Ryan4012", ariaLabel: "GitHub" },
      ]
    }
  ];

  return (
    <nav className="border-b border-gray-800 py-4">
      
      {/* Left 
      <div className="flex items-center gap-4">
        <Image
            src="/images/WebsitePicture01.jpeg"
            alt="Profile picture"
            width={100}
            height={100}
            className="rounded-lg object-cover"
        />

        <div>
          <p className="font-semibold">Ryan Franson</p>
          <p className="text-lg text-gray-400">IT • Cyber • Cloud • AI/ML</p>
        </div>
      </div>
     */}

      {/* Center Links 
      <div className="flex gap-6 text-m">
        <Link href="/">Home</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
      </div>
      */}
      
        <CardNav
            logo="/images/WebsitePicture01.jpeg"
            logoAlt="Company Logo"
            items={items}
            baseColor="#0B0F14"
            menuColor="#fff"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
        />

    </nav>
  );
}