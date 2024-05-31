import React from 'react';

const Home = () => {
  return (
    <div id='home' className='flex items-center justify-center w-full h-screen'>
      <div className="text-center">
        <img src="large-logo.svg" alt="Large Logo" className="w-auto h-auto mx-auto" />
        <p className="text-2xl mt-4">The Specialized DAW for Storytellers</p>
      </div>
    </div>
  );
};

export default Home;
