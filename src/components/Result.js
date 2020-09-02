import React, {useContext} from "react";
import {QuestionContext} from "../context/QuestionContext";
import ReactJson from 'react-json-view'

const Result = () => {
    const {dataRaw, queryResults} = useContext(QuestionContext)

    if (dataRaw) {

        // add any further data you want to visualized
        const data_sanitized = {
            'generated_sql': dataRaw['sql'],
            'potential_values': dataRaw['potential_values_found_in_db']
        }

        return (
            <>
                <ReactJson src={data_sanitized} name={false} enableClipboard={false} displayDataTypes={false} collapsed={true} />
                <h3 className="mt-4">Results (max.100)</h3>
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

    return null;
}

export default Result;
