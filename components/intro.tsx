'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: 'tween',
              duration: 0.2,
            }}
            >
            <Image 
            src='/selfphoto.jpg' 
            className='h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white'
            alt='photo of me' 
            width='192' 
            height='192' 
            quality='95' 
            priority={true} />
          </motion.div>

          <motion.span className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1 
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My name is <span className='font-bold'>Jack Lomax</span>, I&apos;m a <span className='font-bold'>full stack web developer</span> based in Axminster, Devon, UK.
      </motion.h1>

      <motion.div 
        className='flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <Link 
          href='#contact' 
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>

        <a href='/CV.pdf' download className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'>
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>

        <a href='https://github.com/Lowza' target='_blank' className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.5rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
          <FaGithubSquare />
        </a>

      </motion.div>
    </section>
  )
}
