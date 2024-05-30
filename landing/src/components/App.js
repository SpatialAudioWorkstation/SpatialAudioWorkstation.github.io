import React from 'react';
import Header from './Header';
import Section from './Section';
import Home from './Home';

function getAboutContent() {
  return "The Spatial Audio Workstation (SAW) revolutionizes audio production by integrating 3D spatialization and object placement into a Digital Audio Workstation (DAW) using open-source technologies like the Tracktion engine and Godot game engine. SAW's intuitive 3D interface allows users to precisely manage audio in a dynamic visual context, enhancing creative control over sound design. Features include robust track and clip management, interaction with audio through 3D objects, and comprehensive editing tools that cater to both novice and professional users."
}

function getDemoContent() {
  return <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Id64ehbnGrQ?si=s3PVsGF-mw9Sw1lL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}

function getShowcaseContent() {
  return <iframe width="100%" height="auto" src="https://www.youtube.com/embed/i6TcplbpEsc?si=heX2C7qYZ9I9qVAR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}

function getTestingContent() {
  return "User testing content goes here"
}

function getFeaturesContent() {
  return "Features content goes here"
}

function getContactContent() {
  return "Contact content goes here"
}

function App() {
  const sections = [
    { id: "about", title: "About", content: getAboutContent(), isVideo: false },
    { id: "demo", title: "Demo", content: getDemoContent(), isVideo: true },
    { id: "showcase", title: "Showcase", content: getShowcaseContent(), isVideo: true },
    { id: "testing", title: "User Testing", content: getTestingContent(), isVideo: false },
    { id: "features", title: "Features", content: getFeaturesContent(), isVideo: false },
    { id: "contact", title: "Contact Us", content: getContactContent(), isVideo: false }
  ];

  return (
    <div>
      <Header />
      <div>
        <Home />
        {sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            headerOnLeft={index % 2 === 0}
            isVideo={section.isVideo}
          >
            {section.content}
          </Section>
        ))}
      </div>
    </div>
  );
}

export default App;
