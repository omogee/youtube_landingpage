import logo from './logo.svg';
import './App.css';
import LandingPage from './landingpage';
import Navbar from './navbar';

function App() {
  return (
   <div>
    <div style={{position:"sticky", top:"0px",zIndex:"20",backgroundColor:"white", width:"100%",overflowY:"hidden"}}>
     <Navbar />
    </div>
  <div className='landingapp_main'>
    <div className='landingapp_1'>
      <div style={{display:"flex",position:"fixed",left:"20px", flexDirection:"column"}}>
        <div style={{flex:"2",alignSelf:"center"}}>
        <center>
        <span className='fa fa-home' style={{fontSize:"25px"}}></span><br/>
          <small style={{fontWeight:"lighter",fontSize:"10px"}}>Home</small>
        </center>
        </div>
        <br/>
        <br/>
        <div style={{flex:"1"}}>
        <center>
        <span className='fa fa-envelope-o' style={{fontSize:"20px"}}></span><br/>
          <small style={{fontWeight:"lighter",fontSize:"10px"}}>subscriptions</small>
        </center>
        </div>
        <br/>
        <br/>
        <div style={{flex:"1"}}>
         <center>
         <span className='fa fa-play-circle-o' style={{fontSize:"20px"}}></span><br/>
          <small style={{fontWeight:"lighter",fontSize:"10px"}}>Library</small>
         </center>
        </div>
        <br/>
        <br/>
        <div style={{flex:"1"}}>
        <center>
         <span className='fa fa-ticket' style={{fontSize:"20px"}}></span><br/>
          <small style={{fontWeight:"lighter",fontSize:"10px"}}>Shorts</small>
         </center>
        </div>
      </div>
    </div>
    <div className='landingapp_2'>
    <LandingPage />
    </div>
  </div>
   </div>
  );
}

export default App;
