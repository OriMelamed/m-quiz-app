const QuizResult = ({ result, retry, name }) => {
    return (<div className="result-screen">
        <h1>{name} </h1>
        <h2>Result:{result.percantage}%</h2>
        <p>Selected {result.correct} correct options out of {result.total} questions.</p>
        <button onClick={retry}>Retry</button>
    </div>);
}

export default QuizResult;