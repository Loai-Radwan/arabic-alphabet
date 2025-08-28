import Quiz from "./Quiz";

import './quiz.css'
import quiz from "../../quiz";
import { useCallback, useState , useEffect } from "react";
import Results from "./Result";



export default function QuizGrid() {

    const [start , setStart] = useState({
        isStart : false,
        numberOfQuestion : 1

    })
    const [current, setCurrent] = useState(0)
    const [answers, setAnswers] = useState({
        userAnswers: [],
        rightAnswers: 0,
    })

    function handleChange(event){
        setStart(prev => ({...prev , numberOfQuestion : event.target.value}))
    }

    const [questions, setQuestion] = useState([])



    const increaseRight = useCallback(() => {
        setAnswers(prev => ({ ...prev, rightAnswers: prev.rightAnswers + 1 }))
    }, [])
    const addAnswer = useCallback((userAnswer, answerState) => {
        setAnswers(prev => ({ ...prev, userAnswers: [...prev.userAnswers, [userAnswer, answerState]] }))
    }, [])


    function handleStart(){
        setStart(prev => ({...prev , isStart : true}))
    }

    useEffect(() => {
    setQuestion(quiz.sort(() => Math.random() - 0.5).slice(0, start.numberOfQuestion))
  }, [start.numberOfQuestion]);

    let showResult = questions.length === current

    function increaseCurrent() {
        setCurrent(prev => prev + 1)
    }



    function handleRestart() {
        setAnswers({
            userAnswers: [],
            rightAnswers: 0,
        })
        setCurrent(0)
        setQuestion(quiz.sort(() => Math.random() - 0.5).slice(0, start.numberOfQuestion))
        setStart({
        isStart : false,
        numberOfQuestion : 1

    })
    }

    return <>

        {!showResult && <div className="quizGrid" >
            {start.isStart == false && <div className="start" > 
                <h2>اختر عدد الأسئلة</h2>

                    <input type="number" onChange={handleChange} value={start.numberOfQuestion} min='0' max='28' />

                <button onClick={handleStart} >ابدأ</button>
            </div> }

            {start.isStart && <><Quiz question={questions[current]} increaseCurrent={increaseCurrent} increaseRight={increaseRight} addAnswer={addAnswer} ></Quiz> 
            <div className="bullets">
                {questions.map((question, index) => <span key={question.answer} className={index == current ? 'active' : ' '} ></span>)}
            </div> </>}
            
        </div>
        }

        {showResult &&  <Results rightAnswers={answers.rightAnswers} userAnswers={answers.userAnswers} questions={questions} startAgain={handleRestart} > </Results> }
    </>
}