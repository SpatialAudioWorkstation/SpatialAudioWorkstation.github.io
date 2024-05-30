import React from 'react';

const Section = ({ id, title, children, headerOnLeft, isVideo }) => {
  return (
    <section 
      id={id} 
      className={`flex flex-col md:flex-row items-center my-8 ${isVideo ? 'min-h-screen' : 'min-h-1/2-screen'}`}
    >
      {headerOnLeft ? (
        <>
          <div className='w-full md:w-1/6 p-4 flex justify-center'>
            <h2 className='text-3xl font-bold'>{title}</h2>
          </div>
          <div className='w-full md:w-5/6 p-4 flex justify-center'>
            {children}
          </div>
        </>
      ) : (
        <>
          <div className='w-full md:w-5/6 p-4 flex justify-center'>
            {children}
          </div>
          <div className='w-full md:w-1/6 p-4 flex justify-center text-right'>
            <h2 className='text-3xl font-bold'>{title}</h2>
          </div>
        </>
      )}
    </section>
  );
};

export default Section;
