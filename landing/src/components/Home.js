import React from 'react';

const Home = () => {
  // This displays the home page of the website
  // The logo is displayed in the center of the screen
  return (
    <div id='home' className='flex items-center justify-center w-full h-screen'>
      <div className="text-center">
        <img src="large-logo.svg" alt="Large Logo" className="w-auto h-auto mx-auto" />
        <p className="text-2xl mt-8 text-section-green">The Specialized DAW for Storytellers</p>
      </div>
    </div>
  );
};

export default Home;
