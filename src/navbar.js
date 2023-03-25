import React, { useState, useEffect } from 'react';

function Navbar() {
    const [sections, setsections] = useState([
        "Nollywood","Music", "videos", "art", "culture", "artists", "music video", "life","commentary", "sports", "festivals", "revivals", 
        "sketch comedy", "comedy","News", "computer", "humans", "live"
    ])
 
    return ( 
        <div style={{width:"100%",padding:"0",margin:"0", overflow:"hidden"}}>
           <div className='nav-div'>
           <div className='nav-sect1'>
          <div className='nav-sect1_main'>
          <div className='nav-icon'>
                <span className='fa fa-bars roundborder'></span>
            </div>
            <div className='nav-brand'>
                <img style={{width:"100%"}} src={`https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg`} />
            </div>
          </div>
           </div>
           <div className='nav-sect2'>
          <div className='nav-sect2_main'>
            <div className='nav-search'>
   <input className="form-control" placeholder='Search'/>
            </div>
            <div className="nav-audio-search">
                <span className='fa fa-microphone roundborder'></span>
            </div>
            </div>
            </div>
            <div className='nav-sect3'>
          <div className='nav-sect3_main'>
                <div style={{flex:"1"}}>
                <span className='fa fa-video-camera icon_1'></span>
            </div>
            <div style={{flex:"1"}}>
                <span className='fa fa-bell-o icon_2'></span>
            </div>
            <div style={{flex:"1"}}>
                <span className='icon_3'>E</span>
            </div>
                </div>
            </div>
           </div>
           <div style={{display:"flex", flexWrap:"nowrap"}}>
            <div style={{width:"10%"}}></div>
            <div style={{width:"90%",marginBottom:"10px"}}>
            <div className='nav-div2'>
            <div className='nav-div2_subdiv'>
   {sections.map(section =>
    <div key={section}  className="nav-div2_subsection">
        <span>{section}</span>
    </div>
    )}
    </div>
           </div>
            </div>
           </div>
        </div>
     );
}

export default Navbar;