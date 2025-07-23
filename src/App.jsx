
import '../public/noramlize.css'
import Header from './components/Header/Header';
import '../public/main.css'
import Popup from './components/Popup/Popup';

import { useState } from 'react';
import LetterGrid from './components/Letter/LetterGrid';
import Letters from './data'
import Sounds from './components/Sounds';

function App() {
  const [showPopup , setShowPopup] = useState(false)
  const [selectedLetter, setSelectedLetter] = useState(null);

  function handleLetterClick(letter) {
    setSelectedLetter(letter);     // set current letter
    setShowPopup(true);            // open popup
  }

function handleClose(){
  setShowPopup(was => !was)
  setSelectedLetter(null)
}

  return ( 
    <>
      {showPopup &&  <Popup 
  onClose={handleClose} 
  letter={selectedLetter}    />  }
    <Header/>
 
    <LetterGrid letters={Letters} onLetterClick={handleLetterClick} />
    
   <Sounds />
    </>
  )
}


export default App
