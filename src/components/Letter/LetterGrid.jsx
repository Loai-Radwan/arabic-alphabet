
import Letter from "./Letter"

export default function LetterGrid({letters,onLetterClick }){

    return (
        <div className="container">
       {letters.map(letter =>(
         
         <Letter onClick={onLetterClick  }    key={letter.name} letterData={letter}  />
        ))}
    </div>
    )
}