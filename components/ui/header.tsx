// import React from 'react'
// import { Button } from "@/components/ui/button"
// import Image from 'next/image'
// import Link from "next/link";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { ChevronDown } from 'lucide-react';
// import { Atom } from 'lucide-react';
// import { CircleDivide } from 'lucide-react';
// import { NotebookPen } from 'lucide-react';
// import { Landmark } from 'lucide-react';
// import { ModeToggle } from '../ModeToggle';
// import { LogOut } from 'lucide-react';
// import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';


// export default function Header() {
//     return (
//         <header className="grid grid-cols-3 items-center max-w-[1920px] w-[90%] mx-auto py-8">


//             {/* Links - center column */}
//             <ul className="flex items-center gap-16 font-secondary dark:text-[#888888] font-base">
//                 <li ><DropdownMenu>
//                     <DropdownMenuTrigger className="flex gap-1 cursor-pointer">Services <ChevronDown /></DropdownMenuTrigger>
//                     <DropdownMenuContent className="">
//                         <DropdownMenuLabel></DropdownMenuLabel>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem><Atom />Science</DropdownMenuItem>
//                         <DropdownMenuItem><CircleDivide />Math</DropdownMenuItem>
//                         <DropdownMenuItem><NotebookPen />English</DropdownMenuItem>
//                         <DropdownMenuItem><Landmark />History</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu></li>
//                 <li ><Link href="/about">About</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//             </ul>

//             {/* Logo - left column */}

//             <div >
//                 <Link href="/" className="flex justify-center items-center gap-2">
//                     <Image src="/logo.svg" alt="acadify" width={50} height={50} />
//                     <h1 className="font-display text-2xl font-extrabold text-display dark:text-white/90">acadify</h1>
//                 </Link>
//             </div>

//             {/* Buttons - right column */}
//             <div className="flex justify-end gap-2 items-center">
//                 <Button className="bg-white border border-display text-display hover:text-gray-50 py-6 px-6 text-lg " asChild>

//                     <LoginLink postLoginRedirectURL="/about">Sign in</LoginLink>


//                 </Button>
//                 <Button className="bg-display dark:bg-[#2ca58d] px-12 py-6 text-gray-50 text-lg mr-4">Try now!</Button>
//                 {/* <Button variant="ghost" size="icon" aria-label="LogOut" title='LogOut' className='rounded-full' asChild>
//                     <LogoutLink>
//                         <LogOut />
//                     </LogoutLink>
//                 </Button> */}
//                 <ModeToggle />
//             </div>

//         </header>
//     )
// }

import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import { Atom } from 'lucide-react';
import { CircleDivide } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { Landmark } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';
import { LogOut } from 'lucide-react';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';


export default function Header() {
    return (
        <header className="grid grid-cols-3 items-center max-w-[1920px] w-[90%] mx-auto py-8">


            {/* Links - center column */}
            <ul className="flex items-center gap-16 font-secondary dark:text-[#888888] font-base">
                <li ><DropdownMenu>
                    <DropdownMenuTrigger className="flex gap-1 cursor-pointer">Products <ChevronDown /></DropdownMenuTrigger>
                    <DropdownMenuContent className="">
                        <DropdownMenuLabel></DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Atom />Science</DropdownMenuItem>
                        <DropdownMenuItem><CircleDivide />Math</DropdownMenuItem>
                        <DropdownMenuItem><NotebookPen />English</DropdownMenuItem>
                        <DropdownMenuItem><Landmark />History</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu></li>
                <li ><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

            {/* Logo - left column */}

            <div >
                <Link href="/" className="flex justify-center items-center gap-2">
                    <Image src="/logo.svg" alt="acadify" width={50} height={50} />
                    <h1 className="font-display text-2xl font-extrabold text-display dark:text-white/90">acadify</h1>
                </Link>
            </div>

            {/* Buttons - right column */}
            <div className="flex justify-end gap-2 items-center">
                <Button className="bg-white border border-display text-display hover:text-gray-50 py-6 px-6 text-lg " asChild>

                    <LoginLink postLoginRedirectURL="/about">Sign in</LoginLink>


                </Button>
                <Button className="bg-display dark:bg-[#2ca58d] px-12 py-6 text-gray-50 text-lg mr-4">Try now!</Button>
                {/* <Button variant="ghost" size="icon" aria-label="LogOut" title='LogOut' className='rounded-full' asChild>
                    <LogoutLink>
                        <LogOut />
                    </LogoutLink>
                </Button> */}
                <ModeToggle />
            </div>

        </header>
    )
}
