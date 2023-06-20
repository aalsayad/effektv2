import React from 'react';

const SquareButton = ({ children }) => {
  return (
    <div className='group mr-3 md:mr-7 h-8 w-8 flex rounded-md items-center justify-center border-[1px] border-[#383A47] cursor-pointer transition duration-200 ease-out hover:border-[#70748E] hover:bg-[#ffffff10]'>
      {children}
    </div>
  );
};

export default SquareButton;
