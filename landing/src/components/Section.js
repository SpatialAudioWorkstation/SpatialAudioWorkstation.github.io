import React from 'react';

function Section({ id, title, headerOnLeft, isVideo, children }) {
  return (
    <section id={id} className="py-10">
        <div>
            <div className={`flex ${headerOnLeft ? 'flex-row' : 'flex-row-reverse'} items-stretch`}>
                <div className={'w-1/6 bg-section-bg-brown text-section-green flex justify-center items-center' +
                                            (headerOnLeft ? ' rounded-r-lg' : ' rounded-l-lg')}>
                    <h2 className="text-4xl font-bold">{title}</h2>
                </div>
                <div className={`text-2xl w-5/6 p-4 from-transparent to-section-green to-40% my-3
                                                    ${headerOnLeft? 'bg-gradient-to-l pr-20 md:pr-32 lg:pr-52' : 'bg-gradient-to-r pl-20 md:pl-32 lg:pl-52'} 
                                                    ${isVideo ? 'flex justify-center items-center' : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Section;
