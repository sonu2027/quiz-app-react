function Result({ count, startAgain }) {
    return (
        <>
            <div id="results" className="item">
                <div id="upper">
                    <p id="score">Score:{count[0]}</p>
                    <p id="rightquestion">Total right question:{count[0]}</p>
                </div>
                <div id="lower">
                    <p id="wrongquestion">Total wrong question:{count[1]}</p>
                    {count[0] >= 6 ? <p id="finalresult" >Final Result:Pass</p>
                        :
                        <p id="finalresult" >Final Result:Fail</p>
                    }
                </div>
            </div>
            <button className="play-again" onClick={startAgain}>Play again</button>
        </>
    )
}
export default Result