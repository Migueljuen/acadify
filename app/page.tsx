
'use client'

import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { motion } from 'framer-motion'
import Image from 'next/image';
import Books from '../public/books.svg';
import Audiobook from '../public/audiobook.svg';
import Paper from '../public/paper.svg';
import CountUp from "react-countup";
import StatsBox from "@/components/StatsBox";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .4 }}
      >
        {/* Header */}
        <Header />


        <main>
          {/* hero */}
          <AnimatedSection >
            <section className="flex flex-col justify-center items-center text-center h-[880px] relative overflow-hidden ">


              <h1 className="heading-fluid font-extrabold font-display z-10 text-display dark:text-[#ededed]">Study Smarter with<br /> <span className="bg-[#2ca58d]">Acadify</span>.</h1>
              <p className="text-2xl xl:text-3xl font-secondary text-primary z-10 dark:text-[#ededed] mt-8 my-12 tracking-tight ">Instant Access to Student-Made Resources.<br />
                Booking a session takes just a few clicks.</p>

              <Button className="bg-display dark:bg-[#2ca58d] z-10 px-12 py-6 text-gray-50 text-lg">Try now!</Button>
              <p className="pt-6 z-10"> Hassle-free process.</p>

              <div className="shits  w-full h-full absolute blur-[8rem] hidden dark:block ">
                <div className="size-3/4 bg-yellow-400/1 absolute left-0 -bottom-24 rounded-tr-full rounded-tl-full"></div>
                <div className="size-3/4 bg-green-400/0 absolute right-0 -bottom-24 rounded-tl-full "></div>
              </div>

            </section>
          </AnimatedSection>

          <StatsBox />



          {/* section 2 */}
          <AnimatedSection>
            <section className="flex flex-col justify-center items-center text-center h-[600px] my-24  ">
              <h1 className="text-6xl font-extrabold font-display text-display dark:text-[#ededed]">Turn hours of studies<br /> into minutes </h1>

              <div className="max-w-[1440px] w-[90%] flex flex-row justify-evenly my-16">
                <div className="w-32 h-32  dark:rounded-full dark:bg-[#2ca58d] dark:p-6">
                  <Image src={Books} alt="Books" className="w-full h-full" />
                </div>
                <div className="w-32 h-32 dark:rounded-full dark:bg-[#2ca58d] dark:p-6 ">
                  <Image src={Audiobook} alt="Audiobook" className="w-full h-full" />
                </div>
                <div className="w-32 h-32  dark:rounded-full dark:bg-[#2ca58d] dark:p-6">
                  <Image src={Paper} alt="Paper" className="w-full h-full" />
                </div>
              </div>

              <p className="text-xl font-secondary text-primary  max-w-[1440px] w-[90%] mt-4 dark:text-[#edededc0]"> Why spend endless hours buried in textbooks when you can learn the same material in a fraction of the time? Acadify helps you focus on what matters, so you retain more in less time.</p>
            </section>
          </AnimatedSection>

        </main>
        {/* footer*/}
        <footer className="w-full bg-[#2ca58d]/5  dark:bg-[#2ca58d]/30">
          <div className="max-w-[1280px] w-90% mx-auto  h-[700px] flex flex-col items-center justify-evenly gap-12 ">
            <div className="flex flex-row gap-12  w-full">
              <p className="text-5xl font-semibold font-display text-display dark:text-[#ededed]">Subscribe to our newsletter <br /> for important updates</p>
              <div className="">
                <input type="text" placeholder="your@email.com" className="bg-black/5 dark:bg-white/90 px-4 dark:text-black py-3 text-lg w-4/6 mr-2 " />
                <Button className="bg-display  dark:bg-[#2ca58d] px-12 py-6 text-gray-50 text-lg">Try now!</Button>
                <p className="text-black/50 dark:text-[#ededed] mt-1">By submitting your email, you agree to our Terms of Use and Privacy Policy</p>
              </div>


            </div>
            <div className=" w-full flex flex-row space-x-48 justify-start" >
              <div>
                <Link href="/" className="flex justify-start items-center gap-2">
                  <Image src="/logo.svg" alt="acadify" width={50} height={50} />
                  <h1 className="font-display text-2xl font-extrabold text-display dark:text-white/90">acadify</h1>
                </Link>
                <p className="text-black/50 dark:text-[#ededed] mt-1">The future of learning</p>
              </div>
              <div className="text-black/70 dark:text-[#ededed] mt-1 font-semibold text-lg">


                <p className="mt-1">Creator toolkit</p>
                <p className="mt-1">Documentation</p>
                <p className="mt-1">Contact Us</p>
              </div>
              <div className="text-black/70 dark:text-[#ededed]  mt-1 font-semibold text-lg">
                <p className="mt-1">Portfolio</p>
                <p className="mt-1">Careers</p>
              </div>
            </div>
            <div className="border-t-2 border-black/10 dark:border-white/20 dark:text-[#ededed] w-full flex justify-between pt-4 text-black/70">
              <p>© 2025 All rights reserved</p>
              <div className="flex flex-row space-x-12">
                <p>Terms of use</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </footer>
      </motion.div >
    </>
  )
}