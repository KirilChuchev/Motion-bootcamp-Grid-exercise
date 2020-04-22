import React, { useEffect, useState } from 'react';
import RenderingData from './RenderingData';

const DbFilterRecords = function (props) {

    let { criteria } = props.match.params;

    const apiUrl = `filter/${criteria}`;

    const [filteredData, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5050/${apiUrl}`)
        .then(response => response.json())
        .then(docs => setData(docs))
        .catch(console.log)
    }, []);

    return RenderingData(filteredData);


    // useEffect(() => {
    //     fetch(`http://localhost:5050/filter/${criteria}`)
    //         .then(res => res.json())
    //         .then(docs => {
    //             return docs.reduce((a, b) => {

    //                 let deleteHref = `/delete/${b.id}`;
    //                 let filterHref = `/filter/${b.department}`;

    //                 let element = <tr>
    //                     <td className="delete">
    //                         <a href={deleteHref}>{b.id}</a>
    //                     </td>
    //                     <td>{b.first_name}</td>
    //                     <td>{b.last_name}</td>
    //                     <td>{b.email}</td>
    //                     <td>{b.job_title}</td>
    //                     <td className="filter">
    //                         <a href={filterHref}>{b.department}</a>
    //                     </td>
    //                 </tr>;

    //                 a.push(element);

    //                 return a;
    //             }, []);
    //         })
    //         .then(docs => setData(docs))
    // }, []);

    // return data;

}


export default DbFilterRecords;