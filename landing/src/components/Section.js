import React from 'react';

function Section({ id, title, headerOnLeft, isVideo, children }) {
  return (
    <section id={id} className="py-10">
      <div className="container mx-auto px-4">
        <div className={`flex ${headerOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
          <div className="w-full md:w-1/6 lg:w-1/6 mb-8 lg:mb-0 bg-section-bg-brown text-section-green flex justify-center items-center">
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
          <div className={`text-2xl w-full md:w-5/6 lg:w-5/6 p-4 from-transparent to-section-green to-40% ${headerOnLeft ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} ${isVideo ? 'flex justify-center items-center' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
