import React from 'react';

function HeaderButton({ href, children }) {
  return (
    <a href={href} className='flex-1 text-center py-2 hover:text-blue-500'>
      {children}
    </a>
  );
}

function ButtonSeparator() {
    return <span className='border-l h-8 self-center'></span>;
}


const Header = () => {
  return (
    <header className='flex items-center p-4 bg-white shadow-md fixed w-full top-0 z-50'>
      <div className='flex-none w-40 text-2xl font-bold'>Logo</div>
      <nav className="flex flex-1 justify-between">
        <HeaderButton href="#home">Home</HeaderButton>
        <ButtonSeparator />
        <HeaderButton href="#about">About</HeaderButton>
        <ButtonSeparator />
        <HeaderButton href="#demo">Demo</HeaderButton>
        <ButtonSeparator />
        <HeaderButton href="#showcase">Showcase</HeaderButton>
        <ButtonSeparator />
        <HeaderButton href="#testing">User Testing</HeaderButton>
        <ButtonSeparator />
        <HeaderButton href="#features">Features</HeaderButton>
        <ButtonSeparator />
        <HeaderButton href="#contact">Contact Us</HeaderButton>
      </nav>
    </header>
  );
};

export default Header;
