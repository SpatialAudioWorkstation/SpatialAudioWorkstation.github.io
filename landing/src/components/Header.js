import React from 'react';

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function HeaderButton({ targetId, children }) {
  return (
    <button 
      onClick={() => scrollToSection(targetId)} 
      className='flex-1 text-center py-2 hover:text-blue-500'
    >
      {children}
    </button>
  );
}

function ButtonSeparator() {
  return <span className='border-l h-8 self-center'></span>;
}

function Logo() {
    return (
      <button 
        onClick={() => scrollToSection('home')} 
        className='relative group flex-none w-36 text-2xl font-bold md:w-60 lg:w-80 text-center py-2 hover:animate-hbounce hover:text-logo-hover'
      >
        SPATIAL AW
      </button>
    );
  }

const Header = () => {
  return (
    <header className='flex items-center p-4 bg-header-brown shadow-md fixed w-full top-0 z-50 text-header-purple'>
      <Logo />
      <nav className="flex flex-1 justify-between">
        <ButtonSeparator />
        <HeaderButton targetId="about">About</HeaderButton>
        <ButtonSeparator />
        <HeaderButton targetId="demo">Demo</HeaderButton>
        <ButtonSeparator />
        <HeaderButton targetId="showcase">Showcase</HeaderButton>
        <ButtonSeparator />
        <HeaderButton targetId="testing">User Testing</HeaderButton>
        <ButtonSeparator />
        <HeaderButton targetId="features">Features</HeaderButton>
        <ButtonSeparator />
        <HeaderButton targetId="contact">Contact Us</HeaderButton>
      </nav>
    </header>
  );
};

export default Header;
