import React from 'react';
import Link from 'next/link';

const Button = ({ children, href }) => {
  return (
    <Link
      href={href}
      className='text-sm group py-2 px-4 md:px-6 flex gap-1 rounded-md items-center justify-center border-[1px] border-[#383A47] cursor-pointer transition duration-200 ease-out hover:border-[#70748E] hover:bg-[#ffffff10]'
    >
      {children}
    </Link>
  );
};

export default Button;
