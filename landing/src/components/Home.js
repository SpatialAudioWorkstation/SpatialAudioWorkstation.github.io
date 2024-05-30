import React from 'react';
import '../styles/Home.css';

const Home = () => {
  
    return (
        <div className="columns-1">
            <div className="home-content">
            {/* <svg src="landing\public\large-logo.svg" alt="Large Logo" className="large-logo" /> */}
            <img src="landing\public\large-logo.svg" alt="Large Logo" className="large-logo" />
            <p className="slogan">The Specialized DAW for Storytellers</p>
            </div>
        </div>
    );
  };
  
  export default Home;
