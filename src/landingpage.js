import React, { useState, useEffect } from 'react';
import axios from "axios"

function LandingPage() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage]= useState(1)

    useEffect(()=>{
        setloading(true)
     axios.get(`https://picsum.photos/v2/list?page=${page}`)
     .then(res => {
         setdata(data.concat(res.data))     
            setloading(false)
    })
     .catch(err => console.warn(err))
    },[page])
    return ( 
        <div>
           <div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {data.map((datum,index) =>
                <div  key={datum.download_url} className="datadiv_main" style={{padding:"10px"}}>
                  <div style={{position:"relative"}}>
                  <span className='fa fa-cc hovershow' style={{position:"absolute",zIndex:"3",color:"white",padding:"1px 3px",borderRadius:"2px",backgroundColor:"black",top:"5px", right:"5px"}}>
                        </span>
                        <span className='fa fa-volume-up hovershow' style={{position:"absolute",zIndex:"3",color:"white",padding:"1px 3px",borderRadius:"2px",backgroundColor:"black",top:"5px", right:"40px"}}>
                        </span>
                  <span style={{position:"absolute",zIndex:"3",color:"white",padding:"1px 3px",borderRadius:"2px",backgroundColor:"black",bottom:"5px", right:"5px"}}>
                        <small style={{fontWeight:"bold"}}>{index}:35</small>
                        </span>
                    <img src={datum.download_url} style={{width:"100%",borderRadius:"10px",height:"170px"}} />
                  </div>
                    <div className='detailsdiv' style={{display:"flex",alignSelf:"center",padding:"10px 0px"}}>
                     <div style={{width:"13%",padding:"2px"}}>
                     <img src={datum.download_url} style={{width:"100%",height:"40px",borderRadius:"50%"}} />
                     </div>
                     <div style={{width:"75%",padding:"0px 8px "}}>
                        <p style={{margin:"0px"}}>Understanding the concepts of prayer by myles munroe</p>
                        <br/>
                        <span style={{color:"grey",fontSize:"14px"}}>{datum.author}</span><br/>
                        <span style={{color:"grey",fontSize:"14px"}}>1.5M views: 6 years ago</span>
                     </div>
                     <div style={{width:"5%"}}>
                        <span className='fa fa-ellipsis-v'></span>
                     </div>
                    </div>
                </div>
                    )}
            </div>
           </div>
        </div>
     );
}

export default LandingPage;