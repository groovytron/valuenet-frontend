import React, {useContext} from "react";
import {QuestionContext} from "../context/QuestionContext";

const Result = () => {
    const {question, questionTokenized, potentialValuesDB, semQL, sql, queryResults} = useContext(QuestionContext)

    if (question) {
        return (
            <>
                <p>{question}</p>
                <p>{questionTokenized}</p>
                <p>{potentialValuesDB}</p>
                <p>{semQL}</p>
                <p>{sql}</p>
                <table className="table table-striped mt-5">
                    <tbody>
                    {queryResults.map((resultRow, idx) => (
                        <tr key={idx}>
                            resultRow.map((resultCell) => {
                            (<td>
                                {resultRow}
                            </td>)}
                        </tr>))}
                    </tbody>
                </table>
            </>);
    } else {
        return null;
    }
}

export default Result;
