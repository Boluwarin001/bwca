"use client"

import React from 'react'
import { Button } from './ui/button'
import DarkModeToggle from './DarkModeToggle'
import Link from 'next/link'
import { BookMarkedIcon} from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import SearchInput from './SearchInput'
import Image from 'next/image';

function Header() {
  return (
    <header className="sticky flex top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">

        <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between gap-4">

                {/* Left */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        prefetch={false}
                        className='flex items-center space-x-2 hover:opacity-80 transition-opacity'
                    >
                        {/* <BookOpen className="w-6 h-6 text-primary" /> */}
                        <Image className="" src="/logo-mark.png" width={40} height={40} alt="BWCA logo" priority />
                        <span className="text-sm font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent hidden md:block"><span className="text-green-700">BWC</span>.ACADEMY</span>
                    </Link>

                    {/* Search Feature */}
                    <SearchInput />

                </div>

                {/* Right */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <nav>
                        <Link 
                            href="/my-courses"
                            prefetch={false}
                            className="flex space-x-2 items-center text-sm font-medium hover:text-foreground transition-colors md:border-border md:rounded-md md:px-4 md:py-2"
                        >
                            <BookMarkedIcon className="w-4 h-4 md:hidden" />
                            <span className='hidden md:block'>My Courses</span>
                        </Link>
                    </nav>
                    
                    <DarkModeToggle />

                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="outline" size="sm">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                            
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header
