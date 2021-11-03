import React, {createContext} from "react";
import Banner from './components/banner';
import Navbar from './components/navbar';
import Editorial from "./components/Editorial/Editorial";
import BoxModel from './components/boxModel';
import { useState } from "react";

export const Fun = createContext();

function App() {

  const [Author, setAuthor] = useState();
  const  [ImageUrl, setImageUrl] = useState();
  const [isTrue, setTrue] = useState(false);
  

  const Popup = (e) =>{
    setAuthor(e.target.textContent);
    setImageUrl(e.target.nextSibling.src);
    setTrue(true);
  }

  const closePopup = (bool) => {
    setTrue(bool)
  }

  return (
    <div>
      <BoxModel Author={Author} ImageUrl={ImageUrl} isTrue={isTrue} closePopup={closePopup}/>
      <Fun.Provider value={Popup}>
        <Navbar/>
        <Banner/>
        <Editorial/>
      </Fun.Provider>
    </div>
  );
}

export default App;
