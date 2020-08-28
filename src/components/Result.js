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
                <ReactJson src={data_sanitized} name={false} enableClipboard={false} displayDataTypes={false} collapsed={true} />
                <table className="table table-striped mt-5">
                    <tbody>
                    {queryResults.map((resultRow, idx) => (
                        <tr key={idx}>
                            {resultRow.map((resultCell) => (
                                <td>
                                    {resultCell}
                                </td>))}
                        </tr>))}
                    </tbody>
                </table>
            </>);
    }

    if (promiseInProgress) {
        return (
            <DotLoader size={150}/>
        );
    }

    return null;
}

export default Result;
