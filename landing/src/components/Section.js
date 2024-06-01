import React from 'react';

function Section({ id, title, subtitle, headerOnLeft, isVideo, children }) {
  return (
    <section id={id} className="py-6 md:py-10">
        <div>
            <div className={`flex flex-col ${headerOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                <div className={'flex-col w-full md:w-1/6 bg-section-bg-brown text-section-green flex justify-center items-center' +
                                            (headerOnLeft ? ' md:rounded-r-lg' : ' md:rounded-l-lg')}>
                    <h2 className="text-center text-2xl lg:text-4xl font-bold p-2">{title}</h2>
                    <p className="text-center text-lg p-2">{subtitle}</p>
                </div>
                <div className={`text-l md:text-xl lg:text-2xl md:w-5/6 p-4 bg-section-green md:bg-transparent from-transparent to-section-green to-40% md:my-3
                                                    ${headerOnLeft? 'md:bg-gradient-to-l md:pr-32 lg:pr-52' : 'md:bg-gradient-to-r md:pl-32 lg:pl-52'} 
                                                    ${isVideo ? 'flex justify-center items-center' : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Section;
