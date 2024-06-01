import React, { useState } from 'react';

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
      className='h-full text-center px-2 md:px-4 py-2 hover:text-logo-hover hover:font-bold text-wrap'
    >
      {children}
    </button>
  );
}

function ButtonSeparator() {
  return <span className='border-header-brown md:border-logo-hover border-l h-8 self-center'></span>;
}

function Logo() {
    return (
      <button 
        onClick={() => scrollToSection('home')} 
        className='relative group flex-none w-36 text-2xl font-bold md:w-60 lg:w-80 text-left py-2 hover:animate-hbounce hover:text-logo-hover flex'
        >
        <img src="logo512.png" alt="Spatial AW Logo" className="w-10 h-10 inline mr-2" />
        <span className="block group-hover:hidden">SAW</span>
        <span className="hidden group-hover:block">SPATIAL AW</span>
      </button>
    );
  }

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const buttons = [
        { id: "about", content: "About"},
        { id: "testing", content: "User Testing"},
        { id: "features", content: "Features"},
        { id: "demo", content: "Demo"},
        { id: "showcase", content: "Showcase"},
        { id: "contact", content: "Contact Us"},
      ];

  return (
      <div className='bg-header-brown shadow-md text-header-purple fixed w-full flex items-center p-4 z-50'>
        
        {/* Desktop */}
        <div className='hidden md:flex flex-row w-full'>
            <Logo />
            <nav className='justify-end flex w-full'>
                {buttons.map((button) => (
                    <div key={button.id} className=" ">
                    <ButtonSeparator />
                    <HeaderButton targetId={button.id} onClick={() => setIsOpen(false)}>
                        {button.content}
                    </HeaderButton>
                    </div>
                ))}
            </nav>
        </div>
        

        {/* Mobile */}
        <div className='w-full md:hidden flex flex-row-reverse justify-end'>
            
            
            <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden ml-auto p-2 focus:outline-none'
            >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                </svg>
            </button>

            <nav className={`md:hidden flex-row ml-auto ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col">
                {buttons.map((button) => (
                    <div key={button.id} className="flex ">
                    <ButtonSeparator />
                    <HeaderButton targetId={button.id} onClick={() => {
                        setIsOpen(!isOpen);
                        scrollToSection(button.id);
                        }}>
                        {button.content}
                    </HeaderButton>
                    </div>
                ))}
                </div>
            </nav>
            <Logo />
        </div>
        </div>
  );
};

export default Header;



