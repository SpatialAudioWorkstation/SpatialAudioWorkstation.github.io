import React, { useState } from 'react';
import Header from './Header';
import Section from './Section';
import Home from './Home';

function getAboutContent() {
  return "The Spatial Audio Workstation (SAW) revolutionizes audio production by integrating 3D spatialization and object placement into a Digital Audio Workstation (DAW) using open-source technologies like the Tracktion engine and Godot game engine. SAW's intuitive 3D interface allows users to precisely manage audio in a dynamic visual context, enhancing creative control over sound design. Features include robust track and clip management, interaction with audio through 3D objects, and comprehensive editing tools that cater to both novice and professional users."
}

function getDemoContent() {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe 
        className="absolute top-0 left-0 w-full h-full" 
        src="https://www.youtube.com/embed/Id64ehbnGrQ?si=s3PVsGF-mw9Sw1lL" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

function getShowcaseContent() {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe 
        className="absolute top-0 left-0 w-full h-full" 
        src="https://www.youtube.com/embed/i6TcplbpEsc?si=heX2C7qYZ9I9qVAR" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

function getTestingContent() {
  return (
    <><p>Interested in trying out the Spatial Audio Workstation? Sign up for our user testing program to get early access to the software and provide feedback on your experience.</p>
    <p className='text-center'>
      <a className='text-3xl text-purple-800 underline hover:text-purple-600' href="https://forms.office.com/r/CimTyFh82E">User Testing Signup</a>
      </p>
    </>
  )
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full text-left py-2 px-4 bg-gray-200 text-gray-700 font-bold rounded focus:outline-none focus:bg-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="bg-gray-100 border-t border-gray-300 p-4">
          {children}
        </div>
      )}
    </div>
  );
}

function getFeaturesContent() {
  return (
    <section className="container mx-auto p-4">
      <AccordionItem title="DAW Functionality">
        <ul className="list-disc pl-6">
          <li>Spatializer - <a href="https://www.adsrsounds.com/product/software/panagement/" className="text-blue-500">Panagement 2</a> which only spatializes stereo, we plan to replace it in the future.</li>
          <li>Smart Tool - Functionality dependent on where you click, on a clip, including:
            <ul className="list-disc pl-6">
              <li>Cross-Fade</li>
              <li>Fade In/Out</li>
              <li>Trim Clip</li>
              <li>Split Clip</li>
            </ul>
          </li>
          <li>TrackView - A track view is the tab container associated with a 3D entity, all of the tracks and their associated clip audio will be spatialized based on the entity's position relative to the listener object, featuring:
            <ul className="list-disc pl-6">
              <li>Track Reordering - The user can reorder tracks in the tracklist by clicking and dragging a track.</li>
              <li>Add Track Button - Creates an empty track within the current TrackView, adds the track to the global track list within the Track Tree</li>
              <li>Playhead Window - Shows what section of the tracks is visible based on the relative size of the tracks in the TrackView.</li>
              <li>Playheads - Displays the current playback position within a timeline or waveform, facilitating navigation, editing, and control of audio playback.</li>
              <li>Zoom - Allows for the resizing of the content within a TrackView.</li>
            </ul>
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Track & Clip Trees">
        <ul className="list-disc pl-6">
          <li>Track Tree - Every time you create a track, it gets added to the global track list within the Track Tree, including:
            <ul className="list-disc pl-6">
              <li>Track Management Window - When you double-click a track in the Track Tree, you are presented with the following options:
                <ul className="list-disc pl-6">
                  <li>Duplicate - Creates an exact duplicate of the track, including all of its contents, and adds it to the global track list in the Track Tree.</li>
                  <li>Delete - Upon confirmation, deletes all occurrences of a track within all TrackViews and then deletes the track from the global track list.</li>
                </ul>
              </li>
              <li>Drag & Drop - From the Track Tree, the user can drag and drop a track from the global track list into a TrackView. Tracks in multiple TrackViews are linked, and an edit to one is applied across all representatives of that track.</li>
            </ul>
          </li>
          <li>Clip Tree - Allows for the importing of clips and keeps a reference to all the clips that previously have been imported, featuring:
            <ul className="list-disc pl-6">
              <li>Clip Management Window - When you double-click a clip in the Clip Tree, you are presented with the following options:
                <ul className="list-disc pl-6">
                  <li>Delete - Upon confirmation, deletes all occurrences of a track within all TrackViews. Deletes track from the global track list.</li>
                </ul>
              </li>
              <li>Drag & Drop - From the Track Tree, the user can drag and drop a track from the global track list into a TrackView. Tracks in multiple TrackViews are linked, and an edit to one is applied across all representatives of that track.</li>
            </ul>
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="3D Object Workspace/3D Scene">
        <ul className="list-disc pl-6">
          <li>3D Gizmo - 3D axis that allows for the movement of the selected object based on mouse click and drag. Locks movement to the axis of the 3D Gizmo that is clicked.</li>
          <li>Camera - User's viewpoint in the 3D Scene, with features including:
            <ul className="list-disc pl-6">
              <li>Orbit - By middle-clicking, you can orbit the camera around a fixed point. If you start a rotate by clicking on an object, the camera will rotate about the center of that object.</li>
              <li>Targeted Zoom - Zooming with the middle mouse wheel will zoom in the 3D Scene based on the location of the mouse cursor.</li>
              <li>Panning - Clicking and dragging in the 3D Scene will cause the camera to pan.</li>
              <li>General Zoom Buttons - In the top right of the 3D scene, the + and - buttons zoom the camera in and out a set distance.</li>
            </ul>
          </li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Workflow Management">
        <ul className="list-disc pl-6">
          <li>Object Properties/Creation Panel - Panel in the upper right of the GUI that allows for the creation of new objects and the editing of the properties of the selected object, with functionalities including:
            <ul className="list-disc pl-6">
              <li>Object Creation - From the object creation panel, you can click and drag objects into the scene. Preloaded object options include: Capsule, Cube, Sphere, Cylinder, Triangular Prism.</li>
              <li>Object Properties - Allows for the movement, renaming, and recoloring of a 3D object. Cannot recolor custom OBJ files. Object color is displayed in the Object Selection Panel.</li>
            </ul>
          </li>
          <li>Object Selection Panel - Panel on the top left of the User Interface, which showcases a list of all the objects within the 3D scene, with functionalities including:
            <ul className="list-disc pl-6">
              <li>Zoom-to-Object - When you click on an object within the Object Selection Panel, the camera will point towards that object and set itself a short distance away from it.</li>
              <li>Open Object Trackview - When you click on an object within the Object Selection Panel, the associated Trackview to that object will open up.</li>
            </ul>
          </li>
          <li>Window Resizing/Disabling - All panels are resizable by clicking their edge and dragging size to preference.</li>
        </ul>
      </AccordionItem>
    </section>
  );
}

function getContactContent() {
  return "Email: spatialaw@gmail.com"
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
    <div className="bg-fixed bg-no-repeat bg-cover " style={{backgroundImage: "url('scene-bg.jpg')"}}>
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
