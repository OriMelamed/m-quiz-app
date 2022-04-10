import { useState, useEffect, useRef } from "react"

const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [vocAnswer, setVocAnswer] = useState("")

    const timer = useRef(null)
    const prograssBar = useRef(null)

    const gotoNextQuestion = () => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        setAnswer(selectedOption, vocAnswer)
        setSelectedOption(null)
    }
    useEffect(() => {
        prograssBar.current.classList.remove("active")
        setTimeout(() => {
            prograssBar.current.classList.add("active")
        }, 0)
        timer.current = setTimeout(gotoNextQuestion, 10 * 1000)
        return gotoNextQuestion
    }, [question])


    return (<div className="question">
        <div className="progress-bar" ref={prograssBar}></div>
        <div className="question-count">
            <b>{currentQuestion}</b>
            of
            <b>{totalQuestions}</b>
        </div>
        <div className="main">
            <div className="title">
                <span>Question:</span>
                <p>{question.question}</p>
            </div>
            <div className="options">
                {
                    question.answers.map((option, index) => {
                        return (
                            <div
                                className={index === selectedOption ? "option active" : "option"}
                                key={index}
                                onClick={() => {
                                    setSelectedOption(index)
                                    setVocAnswer(option)
                                }}
                            >
                                {option}
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="control">
            <button onClick={gotoNextQuestion}>Next</button>
        </div>
    </div >);
}

export default Question;