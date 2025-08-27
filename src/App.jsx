
import '../public/noramlize.css'
import Header from './components/Header/Header';
import '../public/main.css'
import Popup from './components/Popup/Popup';

import { useState } from 'react';
import LetterGrid from './components/Letter/LetterGrid';
import Letters from './data'
import QuizGrid from './components/Quiz/QuizGied';

function App() {
  const [showPopup , setShowPopup] = useState(false)
  const [selectedLetter, setSelectedLetter] = useState(null);

  const [state , setState] = useState('learn')

  function handleLetterClick(letter) {
    setSelectedLetter(letter);     
    setShowPopup(true);           
  }

function handleClose(){
  setShowPopup(was => !was)
  setSelectedLetter(null)
}
function handleChange(tab){
  setState(tab)
}

  return ( 
    <>
      {showPopup &&  <Popup 
  onClose={handleClose} 
  letter={selectedLetter}    />  }
    <Header state={state} handleChange={handleChange} />
    {state == 'learn' && <LetterGrid letters={Letters} onLetterClick={handleLetterClick} />}
    {state == 'quiz' && <QuizGrid  />}

  </>
  )
}


export default App
