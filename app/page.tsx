'use client'

import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { motion } from 'framer-motion'



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
          <section className="flex flex-col justify-end items-center text-center h-[600px] mt-8 ">
            <h1 className="text-8xl font-extrabold font-display text-display dark:text-[#ededed]">Find the <span className="bg-[#2ca58d]">Right</span> Tutor.<br /> Anytime, Anywhere.</h1>
            <p className="text-3xl font-secondary text-primary dark:text-[#ededed] mt-8 my-12 tracking-tight ">Connect with peer tutors who understand your needs.<br />
              Booking a session takes just a few clicks.</p>
            <Button className="bg-display px-12 py-6 text-gray-50 text-lg">Try now!</Button>
            <p className="pt-6"> Hassle-free booking process.</p>
          </section>


        </main>
      </motion.div >
    </>
  )
}