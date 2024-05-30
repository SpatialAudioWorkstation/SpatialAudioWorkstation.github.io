import React from 'react';

function Section({ id, title, headerOnLeft, isVideo, children }) {
  return (
    <section id={id} className="py-8">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${headerOnLeft ? 'lg:flex-row text-left' : 'lg:flex-row-reverse text-right'} items-center`}>
          <div className="w-full md:w-1/6 lg:w-1/6 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
          </div>
          <div className={`w-full md:w-5/6 lg:w-5/6 p-4 ${isVideo ? 'flex justify-center items-center' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
