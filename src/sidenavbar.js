import React, { useState, useEffect } from 'react';

function Sidenavbar() {
    const [icons, seticons]= useState([
        {icon:"fa-user",color:"blue",title:"friends"},{icon:"fa-history",color:"brown",title:"most recent"},
        {icon:"fa-users",color:"grey",title:"groups"},{icon:"fa-shopping-bag",color:"pink",title:"market place"},
        {icon:"fa-clock-o",color:"blue",title:"watch"},
        {icon:"fa-history",color:"brown",title:"memories"},{icon:"fa-users",color:"brown",title:"friends"},{icon:"fa-heart",color:"yellow",title:"saved"},{icon:"fa-columns",color:"grey",title:"pages"},{icon:"fa-star",color:"green",title:"events"}
    ])
    return ( 
 <div >
    <div style={{display:"flex",backgroundColor:"white",width:"100%",height:"50px",margin:"0px"}}>
    
        <div style={{width:"25%", marginLeft:"22%",marginTop:"3px"}}>
        <img src={`https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg`} style={{width:"100%"}} />
        </div>
       
    </div>
    <div style={{height:"100%",overflow:"scroll", position:"absolute", width:"100%"}}>
     {icons.map(icon =>
    <div key={icon.title} className="sidey" style={{width:"60%",display:"flex",margin:"3px 3px",padding:"10px 20px",color:"lightgrey"}}>
        <div style={{width:"20%"}}>
            <span className={`fa ${icon.icon}`} style={{backgroundColor:`${icon.color}`,borderRadius:"20px",padding:"5px"}}></span>
        </div>
        <div style={{width:"80%"}}>
        <p style={{margin:"0px",fontSize:"12px",textTransform:"capitalize",fontSize:"bold"}}>{icon.title}</p>
        </div>
    </div>
    )}
    </div>
 </div>
     );
}

export default Sidenavbar;