import React from 'react';
// import '../styles/Section.css';

const Section = ({ id, title, children, header_dir }) => {
    if (header_dir === "left") {
        return (
            <section id={id} className='columns-2'>
            <div>
                <h2 className='text-3xl font-bold'>{title}</h2>
            </div>
            <div >
                {children}
            </div>
            </section>
        );
        }
    else if (header_dir === "right") {
        return (
            <section id={id} className='columns-2'>
            <div>
                {children}
            </div>
            <div>
                <h2 className='text-3xl font-bold'>{title}</h2>
            </div>
            </section>
        );
        }
    else {
        return (
            <section id={id}>
            <div>
                <h2>placeholder</h2>
            </div>
            <div>
                placeholder
            </div>
            </section>
        )
    }
  };
  
  export default Section;
