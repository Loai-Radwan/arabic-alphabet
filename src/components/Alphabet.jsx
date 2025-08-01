import Popup from "./Popup/Popup"

                {/* <div className="sound"> */}
                        {/* </div> */}
                {/* <div className="song">
                    <i className="fa-solid fa-volume-high"></i>
                </div> */}

export default function Alphabet({letter , onClose}){


  if (!letter) return null;

  function playAudio(path) {
    new Audio(path).play();
  }

  function close() {
    onClose();
    onSelect(); // optional if needed
  }


    return (
        <div className="holder">
            <div className="image">
                <p>{letter.letter}</p>
                <img src={letter.img} alt="none" />
            </div>
            <div className="icons" onClick={() => playAudio(letter.audio)} >

                    <i className="fa-solid fa-volume-high">
                        </i>

                
            </div>
            <div onClick={close} className="close">
                <i className="fa-solid fa-x"></i>
            </div>
        </div>
    )
}