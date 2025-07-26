import { Button } from "@/components/ui/button"
import Image from 'next/image'
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

export default async function Home() {
  return (
    <>
      <div>

        {/* Header */}
        <header className="grid grid-cols-3 items-center max-w-[1920px] w-[90%] mx-auto py-8">


          {/* Links - center column */}
          <ul className="flex items-center gap-20 font-secondary">
            <li ><DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1">Services <ChevronDown /></DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuLabel>Subjects Offered</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Atom />Science</DropdownMenuItem>
                <DropdownMenuItem><CircleDivide />Math</DropdownMenuItem>
                <DropdownMenuItem><NotebookPen />English</DropdownMenuItem>
                <DropdownMenuItem><Landmark />History</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu></li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* Logo - left column */}
          <div className="flex justify-center items-center gap-2">
            <Image src="/logo.svg" alt="acadify" width={50} height={50} />
            <h1 className="font-display text-2xl font-extrabold text-display">acadify</h1>
          </div>

          {/* Buttons - right column */}
          <div className="flex justify-end gap-2">
            <Button className="bg-white border border-display text-display py-6 px-6 text-lg">Log In</Button>
            <Button className="bg-display px-12 py-6 text-gray-50 text-lg">Try now!</Button>
          </div>
        </header>


        <main>
          {/* hero */}
          <section className="flex flex-col justify-center items-center text-center h-[600px] mt-8">
            <h1 className="text-8xl font-extrabold font-display text-display">Find the <span className="bg-[#2ca58d]">Right</span> Tutor.<br /> Anytime, Anywhere.</h1>
            <p className="text-3xl font-secondary text-primary mt-8 my-12 tracking-tight ">Connect with peer tutors who understand your needs.<br />
              Booking a session takes just a few clicks.</p>
            <Button className="bg-display px-12 py-6 text-gray-50 text-lg">Try now!</Button>
          </section>

        </main>
      </div>
    </>
  )
}