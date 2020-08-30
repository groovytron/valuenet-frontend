import React, {useContext} from "react";
import {QuestionContext} from "../context/QuestionContext";
import ReactJson from 'react-json-view'
import DotLoader from "react-spinners/DotLoader";
import {usePromiseTracker} from "react-promise-tracker";

const Result = () => {
    const {dataRaw, queryResults} = useContext(QuestionContext)
    const { promiseInProgress } = usePromiseTracker();

    if (dataRaw) {

        // add any further data you want to visualized
        const data_sanitized = {
            'generated_sql': dataRaw['sql'],
            'potential_values': dataRaw['potential_values_found_in_db']
        }

        return (
            <>
                <h2>Question: <i>{dataRaw['question']}</i></h2>
                <ReactJson src={data_sanitized} name={false} enableClipboard={false} displayDataTypes={false} collapsed={true} />
                <h3 className="mt-4">Data (max.100)</h3>
                <table className="table">
                    <tbody>
                    {queryResults.map((resultRow, idx) => (
                        <tr key={idx}>
                            <th scope="row">{idx + 1}</th>
                            {resultRow.map((resultCell, idxColumn) => (
                                <td key={idxColumn}>
                                    {resultCell}
                                </td>))}
                        </tr>))}
                    </tbody>
                </table>
            </>);
    }

    if (promiseInProgress) {
        return (
            <div className="d-flex justify-content-center">
                <DotLoader size={150}/>
            </div>
        );
    }

    return null;
}

export default Result;
