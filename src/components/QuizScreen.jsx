import { useState } from "react";
import Question from "./Question";
import QuizResult from "./QuizResult";

const QuizScreen = ({ retry, name, QuestionList }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const isQeustionEnd = currentQuestionIndex === QuestionList.length

    const calculatedResult = () => {
        return {
            total: QuestionList.length,
            correct: score,
            percantage: Math.trunc((score / QuestionList.length) * 100)
        }
    }

    return (<div className="quiz-screen">
        {
            isQeustionEnd ? (
                <QuizResult
                    result={calculatedResult()}
                    retry={retry}
                    name={name}
                />
            ) : (
                <Question
                    question={QuestionList[currentQuestionIndex]}
                    totalQuestions={QuestionList.length}
                    currentQuestion={currentQuestionIndex + 1}
                    setAnswer={(index, ans) => {
                        console.log(index)
                        if (index !== null && QuestionList[index].correct_answer === ans) {
                            setScore(score + 1)
                        }
                        setCurrentQuestionIndex(currentQuestionIndex + 1)
                    }
                    }
                />
            )
        }

    </div>);
}

export default QuizScreen;