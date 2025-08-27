import Quiz from "./Quiz";

import './quiz.css'
import quiz from "../../quiz";
import { useState } from "react";

export default function QuizGrid(){

    const [current , setCurrent] = useState(0)

    const questions = quiz.sort(() => Math.random() - 0.5).slice(0,10)
    
    let showResult = questions.length === current

    
    function increaseCurrent(){
        setCurrent( prev => prev +1)
    }

    let passQuestion = questions[current]
    let indexofQuestion = questions.findIndex(question => question === passQuestion)
    return <> 
    {!showResult && 
    <div className="quizGrid" >
         <Quiz question={passQuestion} increaseCurrent={increaseCurrent} ></Quiz>
         <div className="bullets">
            {questions.map((question , index) => <span key={question.answer} className={index == indexofQuestion ? 'active' : ' '} ></span>)}
        </div>
        
    </div> }

        {showResult && <div className="result" >This is result </div>}
    </>
}