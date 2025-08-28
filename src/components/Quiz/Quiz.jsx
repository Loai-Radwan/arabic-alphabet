import { memo, useRef } from "react"
function Quiz({question  , increaseCurrent , increaseRight , addAnswer}){
    const answers = useRef()
    function PlayAudio(){
        let audio = new Audio(question.audio)
        audio.play()
        
    }
    function handleClick(element , answer){
        element.classList.add('selected')
        answers.current.classList.add('disabled')

        let answerState = false
        setTimeout(() => {
            if (answer === question.answer){
                element.classList.add('right')
                answerState = true
                // increaseRight()
                // addAnswer(answer)
            }else{
                element.classList.add('wrong')
                // addAnswer(answer)
            }
        } , 1000)
        setTimeout(() => {
            element.classList.remove('right')
            element.classList.remove('wrong')
            element.classList.remove('selected')
            answers.current.classList.remove('disabled')
            increaseCurrent()
            addAnswer(answer , answerState)
            if (answer === question.answer){
                increaseRight()
            }
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
export default memo(Quiz)