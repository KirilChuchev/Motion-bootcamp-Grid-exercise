import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

const DbDeleteRecord = function (props) {

    // return <h1>{props.match.params.docId}</h1>

    let { docId } = props.match.params;

    const [data, setData] = useState([]);

    // fetch(`http://localhost:5050/delete/${docId}`)
    //     .then(res => res.json())
    //     .then(docs => setData(docs));

    fetch(`http://localhost:5050/delete/${docId}.json`, {
        method: 'DELETE'
    })
        .then(response => {

            fetch('http://localhost:5050/all')
                .then(res => res.json())
                .then(docs => setData(docs))
        });



    return data.map(x =>
        (<tr>
            <td className="delete">
                <a href="#/delete/{{doc.docId}}">{x.id}</a>
            </td>
            <td>{x.first_name}</td>
            <td>{x.last_name}</td>
            <td>{x.email}</td>
            <td>{x.job_title}</td>
            <td className="filter">
                <a href="#/filter/{{this.department}}">{x.department}</a>
            </td>
        </tr>))


}




export default DbDeleteRecord