import { useState } from "react"
import Result from "../result/Result"
import Status from "../status/Status"

function Question() {

    const questionContent = {
        1: ["1. How many 2+2?", 8, 4],
        2: ["2. x+y=19, if x=10 then y=?", 9, 8],
        3: ["3. Who is the prime minister of India?", "Narendra Modi", "Manmohan Singh"],
        4: ["4. What is the area of square?", "Square of edge", "Cube of edge"],
        5: ["5. What is the gravitational force of earth?", "10 m/s2", "9.8 m/s2"],
        6: ["6. speed=10km/hr and distance=30km, Time?", "1 hr", "3 hr"],
        7: ["7. Which one is the property of CSS position?", "Relative", "Right"],
        8: ["8. Full form of CSS?", "Cascading sheet style.", "Cascading style sheet."],
        9: ["9. HTML is --", "Hyper text markup language", "Coding language"],
        10: ["10. 8-5+3*4", 24, 15],
    }
    const ans = [4, 9, "Narendra Modi", "Square of edge", "9.8 m/s2", "3 hr", "Relative", "Cascading style sheet.", "Hyper text markup language", 15]

    const [questionNo, setQuestionNo] = useState(1)
    // We will count no of right and wrong question and stored in count array
    const [count, setCount] = useState([0, 0])

    let x = document.getElementsByClassName("options")

    function handleQuestionNo() {
        console.log(ans[questionNo - 1]);
        console.log(x[0].value);
        if (x[0].value == ans[questionNo - 1]) {
            console.log("its run");
            setCount((s) => [s[0] + 1, s[1]])
        }
        else {
            setCount((s) => [s[0], s[1] + 1])
        }
        setQuestionNo(() => questionNo + 1)
    }

    function handleQuiz() {
        console.log("starting");
        setQuestionNo(1)
        setCount([0, 0])
    }

    return (
        <>
            {questionNo === 11 ? <Result count={count} startAgain={handleQuiz} />
                :
                (
                    <div id="container">
                        <div className="item" id="item1">
                            <label >{questionContent[questionNo][0]}</label><br />
                            <select name="" id="" className="options">
                                <option value={questionContent[questionNo][1]}>{questionContent[questionNo][1]}</option>
                                <option value={questionContent[questionNo][2]}>{questionContent[questionNo][2]}</option>
                            </select><br />
                            <button onClick={handleQuestionNo} className="submitbutton">Submit</button><br /><br />
                        </div>
                        <Status />
                    </div>
                )}
        </>
    )
}
export default Question