"use client";

import Image from "next/image";

import { useSession } from "next-auth/react";

import { Sidebar } from "@/components/sidebar/sidebar";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";

export const Header = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <header className="px-3 py-3 flex justify-between items-center">
        <div className="bg-gray-200 h-10 w-10 rounded-md animate-pulse"></div>

        <div className="bg-gray-200 h-10 w-10 rounded-full animate-pulse"></div>
      </header>
    );
  }

  return (
    <header className="bg-primary tracking-wide">
      <nav className="container mx-auto px-3 py-3 flex justify-between items-center">
        <Sidebar />

        <div className="ml-auto flex items-center justify-center gap-5">
          <ThemeSwitcher />

          <button aria-label="Open Profile">
            <Image
              src={
                session?.user?.image ? (
                  session?.user?.image
                ) : (
                  <div className="bg-gray-200 h-10 w-10 rounded-full"></div>
                )
              }
              className="rounded-full"
              alt="profile"
              width={40}
              height={40}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
