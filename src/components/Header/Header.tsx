import React from 'react'
import { ModeToggle } from '../toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from "../ui/button"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.png';

const Header = () => {
    return (
        <div className='flex flex-center-between w-screen h-[15vh]'>
            <div className="container flex flex-center-between h-16 max-w-screen-2xl items-center">
            <div className="font-extrabold">
                <Image src={logo} alt='logo' height={250} width={250}></Image>
            </div>
         <div className="flex gap-10">
          <div className="lg:flex md:hidden gap-8 ">
            {/* <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-bold text-base transition-colors hover:text-foreground/80 text-foreground/60"
              href="/contact"
            >
              Contact Us
            </Link> */}
          </div>
         </div>
            <div className='flex-center gap-4 mr-14'>
                <ModeToggle />
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn >
                    <Link href="/profile">
                        <Button className='flex-center'>
                                Profile
                        </Button>
                    </Link>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </div>
    )
}

export default Header;
