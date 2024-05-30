import React from 'react';
import Header from './Header';
import Section from './Section';
import Home from './Home';

function App() {
  return (
    <div >
      <Header />
      <div >
        <Home />
        <Section id="about" title="About" header_dir="left" >About content goes here</Section>
        <Section id="demo" title="Demo" header_dir="right">Demo content goes here</Section>
        <Section id="showcase" title="Showcase" header_dir="left">Showcase content goes here</Section>
        <Section id="testing" title="User Testing" header_dir="right">User testing content goes here</Section>
        <Section id="features" title="Features" header_dir="left">Features content goes here</Section>
        <Section id="contact" title="Contact Us" header_dir="right">Contact content goes here</Section>
      </div>
    </div>
  );
}

export default App;
