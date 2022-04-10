import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import QuizScreen from './components/QuizScreen';
import JoinScreen from './components/JoinScreen';

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [name, setName] = useState("")
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=100")
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) =>
        ({
          category: question.category,
          type: question.type,
          difficulty: question.difficulty,
          question: question.question,
          correct_answer: question.correct_answer,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }))
        setQuestions([...questions]);
      });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className='quiz-container'>
        {
          (isQuizStarted && name !== "") ? (
            <QuizScreen retry={() => {
              setIsQuizStarted(false)
              setName("")
            }}
              QuestionList={questions}
              name={name}
            />
          ) : (
            <JoinScreen start={() => {
              if (name !== "") {
                setIsQuizStarted(true)
              }
            }}
              name={(n) => { setName(n) }}
            />
          )
        }

      </div>
    </div>
  );
}

export default App;
