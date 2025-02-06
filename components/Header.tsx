"use client";
import Link from "next/link"
import Avatar from "./Avatar"
import { SignInButton } from "@clerk/nextjs"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

function Header() {
  return (
    <header className="bg-white shadow-sm text-gray-800 flex justify-between p-5">
        <Link href="/" className="flex items-center text-4xl font-tin">
        {/*AVATAR */}
        <Avatar seed="Quanta Support Agent" className="red"/> 
        <div className="space-y-1">
            <h1>Quanta</h1>
            <h2 className="text-sm">Your customizable AI agent</h2>
        </div>
        </Link>

        <div className="flex items-center">
            
            <SignedOut>
                <SignInButton/>
            </SignedOut>

            <SignedIn>
                <UserButton showName />
            </SignedIn>

        </div>
    </header>
  )
}

export default Header