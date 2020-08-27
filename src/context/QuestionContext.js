import React, { createContext, useState } from "react";
import axios from 'axios';

export const QuestionContext = createContext({})

if (process.env.REACT_APP_PROTON_API_BASE) {
    axios.defaults.baseURL = process.env.REACT_APP_PROTON_API_BASE
}

const QuestionContextProvider = props => {
    const [question, setQuestion] = useState()
    const [questionTokenized, setQuestionTokenized] = useState()
    const [potentialValuesDB, setPotentialValuesDB] = useState()
    const [semQL, setSemQL] = useState()
    const [sql, setSql] = useState()
    const [queryResults, setQueryResults] = useState()


    const poseQuestion = (question, apiKey) =>  {
        axios.put(`question`, { "question": question}, {headers: {'X-API-Key': apiKey}})
            .then(res => {
                setQuestion(res.data['question'])
                setQuestionTokenized(res.data['question_tokenized'])
                setPotentialValuesDB(res.data['potential_values_found_in_db'])
                setSemQL(res.data['sem_ql'])
                setSql(res.data['sql'])
                setQueryResults(res.data['result'])
            })
    }

    return (
        <QuestionContext.Provider value={{question, questionTokenized, potentialValuesDB, semQL, sql, queryResults, poseQuestion}}>
            {props.children}
        </QuestionContext.Provider>
    )

}

export default QuestionContextProvider
