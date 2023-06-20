'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/EffektLogo.svg';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { CircleStackIcon, ClipboardIcon, HomeIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import LeftSidebar from './LeftSidebar';
import SquareButton from './SquareButton';
import Button from './Button';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';

const links = [
  {
    id: 1,
    name: 'Home',
    icon: <HomeIcon className='h-4 w-4 opacity-40 group-hover:opacity-100 transition-effekt' />,
    href: '/',
  },
  {
    id: 2,
    name: 'Dashboard',
    icon: <Square2StackIcon className='h-4 w-4 opacity-40 group-hover:opacity-100 transition-effekt' />,
    href: '/dashboard',
  },
  {
    id: 3,
    name: 'Tasks',
    icon: <ClipboardIcon className='h-4 w-4 opacity-40 group-hover:opacity-100 transition-effekt' />,
    href: '/tasks',
  },
  {
    id: 4,
    name: 'Databases',
    icon: <CircleStackIcon className='h-4 w-4 opacity-40 group-hover:opacity-100 transition-effekt' />,
    href: '/database',
  },
];

const Navbar = () => {
  const [leftSidebar, setLeftSidebar] = useState(false);

  return (
    <>
      <LeftSidebar leftSidebar={leftSidebar} setLeftSidebar={setLeftSidebar} links={links} />
      <div className='border-b-[1px] border-[#383A47] h-[65px] bg-[#191A1F] flex items-center px-4 md:px-8'>
        <div className='flex justify-between w-full'>
          <div className='flex items-center'>
            {/* Button for Left Side Bar */}
            <div onClick={() => setLeftSidebar(true)}>
              <SquareButton>
                <Bars2Icon className='h-5 w-5 rounded-lg opacity-70 group-hover:opacity-100' />
              </SquareButton>
            </div>
            {/*Logo */}
            <Link href='/' className='w-[80px] md:w-[85px]'>
              <Image src={logo} alt='Effekt Logo' priority />
            </Link>
          </div>
          <div>
            <Button href='/login'>
              Login <ArrowSmallRightIcon className='h-3 w-3 rounded-lg opacity-70 group-hover:opacity-100' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
