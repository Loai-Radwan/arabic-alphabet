
import Letter from "./Letter"
import Sounds from "../Sounds"

export default function LetterGrid({letters,onLetterClick }){

    return (
        <div className="container">
       {letters.map(letter =>(
         
         <Letter onClick={onLetterClick  }    key={letter.name} letterData={letter}  />
        ))}

    <Sounds />

    </div>
    )
}