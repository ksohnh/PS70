import React from 'react';

const Assignment1 = () => {
  return (
    <div className="notes-content">
      <h2>Assignment 1: Introduction & Documentation</h2>
      
      <h4>Project Ideas!</h4>
          <p>Two main project ideas: joint-specific exoskeleton or dumb phone</p>
          
          <h4>Project 1: Joint-specific exoskeleton</h4>
          <p>Inspiration: My mom's joints are pretty bad, and they're getting worse so I wanted to make something that would assist her movements</p>
          <img src="https://designwanted.com/wp-content/uploads/2022/02/Exoskeletons-2.jpeg" width={500} alt=''></img>
          
          <h5>Specifications:</h5>
            <ul>
              <li>Kind of a mechanical joint that attaches around your elbow/knee/wrist/shoulder/etc. and supports the movements</li>  
              <li>Should be light enough to not interfere with movement but robust for support</li>
              <li>Should be able to lock into positions and unlock easily</li>
              <li>Should be easy to put on and take off</li>
            </ul>

          <h5>Considerations:</h5>
            <ul>
              <li>Using a prosthetic/support can often cause surrounding muscles or joints to atrophy, leading to worse damage</li>
              <li>Not super sure about the physiological implications of a device like this</li>
            </ul>
          
          <h4>Project 2: Dumb phone </h4>          
          <p>Inspiration: I hate my phone</p>          
          <img src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:761,cw:2507,ch:2507,q:80,w:2507/ycUVcqfyCDs44UkYCwTzMA.jpg" alt='' width={200}></img>
          <img src="https://hackster.imgix.net/uploads/attachments/970091/1__17qQs2JPE9BjT_xMFaw1Q.jpeg?auto=&format=jpg" alt='' width={200}></img>
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*k_-V1FZUhA5AEBXmwUiS7A.jpeg" width={200} alt=''></img>

          <h5>Specifications:</h5>
            <ul>    
              <li>Create new contacts (name, phone number)</li>
              <li>Send and receive texts</li>
              <li>Make and receive calls</li>
              <li>Have a physical: keyboard, screen, maybe a button to navigate around</li>
              <li>Potentially a touch screen (paper imitator screen)</li>
              <li>Should be able to connect to wifi, ideally to mobile data</li>
            </ul>
          <h5>Considerations:</h5>
            <ul>
              <li>Using either an ESP32 or Raspberry Pi: If using an ESP32, would potentially need to code a lot of the OS myself (even with existing libraries)</li>
              <li>Something called ESP32 Devkit? Need to look into that but apparently it has wifi functionality</li>
              <li>Should wire all the components together first on breadboard before trying to get the formfactor down</li>
              <li>Tradeoff of functionality vs formfactor - I really want it to look cool</li>
              <li>Battery life will probably be a big issue in portability</li>
              <li>Geoff liu did a very similar project, creating kind of a micro computer</li>
            </ul>
          
          <h5>Design inspirations:</h5>
          <img src='https://botland.store/img/art/inne/24057_8.jpg' alt='' width={300}></img>
          <img src='https://lilygo.cc/cdn/shop/files/LILYGO-T-DECK-PRO_9.jpg?v=1742883880' width={300} alt=''></img>
          <img src="https://images.musicstore.de/images/0960/teenage-engineering-ep-133-k-o-ii_1_SYN0008856-000.jpg" alt='' width={300}></img>
          <img src='https://teenage.engineering/_img/store/c91abe82329a4d40168256414da501fd9a456e5b8a5c7d2a2702c54cd704fa1e.webp' alt='' width={300}></img>
    </div>
  );
};

export default Assignment1;
