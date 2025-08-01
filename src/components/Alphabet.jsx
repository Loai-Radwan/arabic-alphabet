
export default function Alphabet({letter , onClose}){


  if (!letter) return null;

  function playAudio(path) {
    new Audio(path).play();
  }

  function close() {
    onClose();
  }


    return (
        <div className="holder">
            <div className="image">
                <p>{letter.letter}</p>
                <img src={letter.img} alt="none" loading="lazy" />
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