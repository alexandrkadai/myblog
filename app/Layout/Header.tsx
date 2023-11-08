import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='w-full'>
    <div className="px-2 py-4 border-b flex justify-between ">
      <div className="text-4xl uppercase">logo</div>
      <button className='text-white bg-black uppercase'>sign in</button>
    </div>
    </header>
  );
};

export default Header;
