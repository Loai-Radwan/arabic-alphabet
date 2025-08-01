import './Letter.css'

export default function Letter({letterData,onClick}) {

      function handleClick(){
        onClick(letterData)
      }


    return (
            <div onClick={handleClick}  className="letter-box">
                <p>{letterData.letter}</p>
                
            </div>
    )
}