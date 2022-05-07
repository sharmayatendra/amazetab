import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Landingpage} from './pages/Landingpage/Landingpage'
import {Homepage} from './pages/Homepage/Homepage'

function App() {
  const [bgImg,setBgImg] = useState();
  const user = localStorage.getItem("username");

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&orientation=landscape&query=nature&color=purple`)
      setBgImg(resp.data.urls.regular)
    })()
  },[])

  return (
    <div className="App">
      <img src={bgImg} alt="" className="background"/>
      {user ? <Homepage /> : <Landingpage />}
    </div>
  );
}

export { App };
