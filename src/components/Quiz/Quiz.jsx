import { useRef } from "react"
export default function Quiz({question  , increaseCurrent}){
    const answers = useRef()
    function PlayAudio(){
        let audio = new Audio(question.audio)
        audio.play()
        
    }
    function handleClick(element , answer){
        element.classList.add('selected')
        answers.current.classList.add('disabled')
        setTimeout(() => {
            if (answer === question.answer){
                element.classList.add('right')
                
            }else{
                element.classList.add('wrong')
            }
        } , 1000)
        setTimeout(() => {
            increaseCurrent()
            element.classList.remove('right')
            element.classList.remove('wrong')
            element.classList.remove('selected')
            answers.current.classList.remove('disabled')
        } , 2000)
    }

    let shuffledAnswers = question.options.sort(() => Math.random() - 0.5)

    return <div className="quiz" >
        <div className="title">
            <div  onClick={PlayAudio} className="play-icon"> <i className="fa-solid fa-volume-high"></i></div>
        </div>
            <div className="answers" ref={answers}>
                {shuffledAnswers.map(answer => <div onClick={(event) => handleClick(event.target , answer)} className="answer" key={answer} > {answer}</div>)}
            </div>
    </div>
}