'use client';
import Image from 'next/image';
import React from 'react';
import { CircleStackIcon, ClipboardIcon, HomeIcon, Square2StackIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import SidebarLink from './SidebarLink';
import logo from '@/public/EffektLogo.svg';
import SquareButton from './SquareButton';

const LeftSidebar = ({ leftSidebar, setLeftSidebar, links }) => {
  return (
    <AnimatePresence>
      {leftSidebar && (
        <div className='flex w-full h-[100dvh] absolute top-0 left-0 z-50'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            onClick={() => setLeftSidebar(false)}
            className='bg-[#191a1f85] flex-grow backdrop-blur-[1px]'
          ></motion.div>

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='px-4 md:px-8 w-[300px] md:w-[500px] calc-height absolute left-0 top-0 bg-[#191A1F] border-r-[1px] border-[#383a4779]'
          >
            {/* Logo & Close Button Side Bar */}
            <div className='h-[65px] flex items-center justify-between'>
              <div className='w-[80px] md:w-[85px]'>
                <Image src={logo} alt='Effekt Logo' />
              </div>
              <div onClick={() => setLeftSidebar(false)}>
                <SquareButton>
                  <XMarkIcon className='h-5 w-5 rounded-lg opacity-70 group-hover:opacity-100' />
                </SquareButton>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='mt-4'>
              <p className='text-[10px] uppercase tracking-wider opacity-20 mb-2'>Navigation</p>
              <div className='flex flex-col gap-1'>
                {links.map((link) => {
                  return (
                    <SidebarLink
                      key={link.id}
                      setLeftSidebar={setLeftSidebar}
                      icon={link.icon}
                      name={link.name}
                      href={link.href}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeftSidebar;
