import { useState } from 'react'
import Alphabet from '../Alphabet'
import './Popup.css'

export default function Popup({letter, onClose}){
  if (!letter) return null;

  function close() {
    onClose(); // trigger App's close handler
    onSelect()
  }

    return(
         <div  className="popup">
            <Alphabet letter={letter}
        onClose={close}  />
        </div>
      

       
    )
}