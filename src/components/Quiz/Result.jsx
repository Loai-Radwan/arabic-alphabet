

export default function Results({rightAnswers , questions , userAnswers , startAgain}){

    return <div className="result">

<h2>لقد حصلت على {rightAnswers} من أصل {questions.length} </h2> 
        <p className="percentage" >{Math.floor((rightAnswers / questions.length ) * 100)}%</p>

        <div className="user-answers">
             <div className="user-answer">
            <h3>إجاباتك</h3>

        {userAnswers.map(answer => <p className={`answer ${answer[1] ? 'right' : 'wrong'} `}  key={answer}> {answer[0]}</p>)}
        </div>

        <div className="right-answer">
            <h3>الإجابات الصحيحة</h3>
            {questions.map(question => <p className="answer" key={question.answer}> {question.answer}</p>)}
        </div>

        </div>

        <button onClick={startAgain} className="restart">ReStart</button>
    </div>
}