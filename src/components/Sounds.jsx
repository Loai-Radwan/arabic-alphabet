const base = import.meta.env.BASE_URL;

export default function Sounds(){
    let fullAudio = new Audio(`${base}assets/Audio/full.mp3`)
    function PlayAudio(){
        fullAudio.play()
    }
    function stopAudio(){
        fullAudio.pause()
    }

    return (
        <div className="sound" >
            <div  onClick={PlayAudio} className="play"> <i className="fa-solid fa-volume-high"></i></div>
            <div onClick={stopAudio} className="stop">
               <i className="fa-solid fa-stop"></i>

            </div>
              
        </div>
    )
}