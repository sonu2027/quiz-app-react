import { useState } from "react"
function useQuestion(){
    
    const [questionHooks, setQuestionHooks]=useState({
        questionNo: 1,
        // We will count no of right and wrong question and stored in count array
        count: [0,0],
        status: false
    })

    return {questionHooks, setQuestionHooks}
}
export default useQuestion