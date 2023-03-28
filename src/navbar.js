import React, { useState, useEffect } from 'react';
import Sidenavbar from './sidenavbar';

function Navbar() {
    const [sections, setsections] = useState([
        "Nollywood","Music", "videos", "art", "culture", "artists", "music video", "life","commentary", "sports", "festivals", "revivals", 
        "sketch comedy", "comedy","News", "computer", "humans", "live"
    ])
    const [navbarclass, setnavbarclass] = useState("fa-bars")
    const [sidebarwidth, setsidebarwidth] = useState("0%")
    const [currentPage, setcurrentPage] = useState("currentPage")
    const [canceldropdown, setcanceldropdown] = useState(false)
    const [displaydropdown, setdisplaydropdown]= useState(false)
   
    const shownav =()=>{
        setnavbarclass(sidebarwidth === "0%" ? "fa-times" : "fa-bars")
        setsidebarwidth(sidebarwidth === "60%" ? "0%" : "60%")
       }
 const setdropdown =()=>{
    const dropdown_btn = document.querySelector(".dropdown-btn")
    const dropdown = document.querySelector(".nav-div2_maindiv")
    dropdown.style.height = "100%"
    dropdown.style.overflow = "scroll"
    dropdown_btn.style.display="none"
    setcanceldropdown(true)
 }
 const removedropdown=()=>{
    const dropdown_btn = document.querySelector(".dropdown-btn")
    const dropdown = document.querySelector(".nav-div2_maindiv")
    dropdown.style.height = "0px"
    dropdown.style.overflow = "hidden"
    dropdown_btn.style.display="block"
    setcanceldropdown(false)  
 }
    return ( 
        <div style={{width:"100%",padding:"0",margin:"0", overflow:"hidden", position:"relative"}}>
                <div className='sidenavbar' style={{width:`${sidebarwidth}`, opacity:`${sidebarwidth === "60%" ? "1" : "0"}`,transition:"all linear 1s",overflow:"hidden", position:"fixed", left:"0px", height:"100%",backgroundColor:"black"}}>
       <Sidenavbar />
                </div>
           <div className='nav-div'>
           <div className='nav-sect1'>
          <div className='nav-sect1_main'>
          <div className='nav-icon'  style={{zIndex:"9748"}}>
                <span onClick={shownav} className={`fa ${navbarclass} roundborder`}></span>
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
                <div style={{position:"relative"}}>
                    <span className="icon-badge" style={{backgroundColor:"indianred",color:"white",position:'absolute', top:"-8px", borderRadius:"30px",marginBottom:"2px",border:"2px solid white",padding:"0px 3px"}}>
                  <small style={{fontWeight:"bold",fontSize:"12px"}}>0</small>
                    </span>
                <span className='fa fa-bell-o icon_2'></span>
                </div>
            </div>
            <div style={{flex:"1"}}>
                <span className='icon_3' onClick={()=> setdisplaydropdown(!displaydropdown)}>E</span>
            </div>
                </div>
            </div>
           </div>
           <div style={{display:"flex",padding:"0", margin:"0", flexWrap:"nowrap"}}>
            <div className='nav-div2_subdiv_divider' style={{width:"10%"}}></div>
            <div className='nav-div2_maindiv' >
            <div className='nav-div2'>
            <div className='nav-div2_subdiv' >
            <div className="nav-div2_subsection" onClick={removedropdown} style={{display:`${canceldropdown ? " block" : "none"}`}}><small >X</small></div>
   {sections.map(section =>
    <div key={section} style={{textOverflow:"inherit",display:"block"}} className="nav-div2_subsection">
        <span>{section}</span>
    </div>
    )}
    </div>
           </div>
            </div>
            <div style={{width:"100%"}} className="dropdown-btn">
                <span className='fa fa-chevron-circle-down' onClick={setdropdown}  style={{fontSize:"20px",textAlign:"right",float:"right",marginRight:"10px",color:"grey"}}></span>
            </div>
           </div>
        <div style={{position:"fixed", display:`${displaydropdown ? "block" : "none"}`,fontSize:"13px", textTransform:"uppercase", border:'1px solid lightgrey',borderRadius:"10px", zIndex:"99999935",backgroundColor:"white", top:"60px",width:"15%", right:"20px"}}>
        <div className='lightsidey' style={{display:"flex",padding:"6px",borderBottom:"1px solid lightgrey"}}>
            <div style={{width:"20%"}}>
                <span className='fa fa-home'></span>
            </div>
            <div style={{width:"80%"}}>
                <p style={{margin:"0px"}}>home</p>
            </div>
          </div>
          
          <div className='lightsidey' style={{display:"flex",padding:"6px", borderBottom:"1px solid lightgrey"}}>
            <div style={{width:"20%"}}>
                <span className='fa fa-sign-in'></span>
            </div>
            <div style={{width:"80%"}}>
                <p style={{margin:"0px"}}>sign in</p>
            </div>
          </div>
          <div className='lightsidey' style={{display:"flex",padding:"6px",borderBottom:"1px solid lightgrey"}}>
            <div style={{width:"20%"}}>
                <span className='fa fa-sign-up'></span>
            </div>
            <div style={{width:"80%"}}>
                <p style={{margin:"0px"}}>sign up</p>
            </div>
          </div>
          </div>
        </div>
     );
}

export default Navbar;