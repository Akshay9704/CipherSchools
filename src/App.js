import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Showcase from './Components/Showcase';
import Player from './Components/Player.js';
import video from './Components/video.mp4';
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState(null)
  const PlayerOptions = {
    autoplay: false,
    controls: true,
    sources: [{
      src: video,
      type: 'video/mp4'
    }]
  }
  return (
    <>
    <Router>
      <Header/>
      <Routes> 
      <Route path="/" element={<navigate to={user ? "/Showcase" : "/Login"}/>} />
        <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/Register" element={<Register />} />
        {user ? (
          <>
        <Route path="/Showcase" element={<Showcase />} />      
        <Route path="/Showcase/Player" element={<Player options={PlayerOptions}/>}/>
          </>
        ) : null
      }  
      </Routes>
    </Router>    
    </>
  );
}


export default App;
