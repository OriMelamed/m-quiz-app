const JoinScreen = ({ start, name, d }) => {
    return (<div className="join-screen">
        <h2>Join Quiz</h2>
        <input type="text" placeholder="Enter Your Name" onChange={e => name(e.target.value)} />
        <button onClick={start}>Start</button>
    </div >);
}

export default JoinScreen;