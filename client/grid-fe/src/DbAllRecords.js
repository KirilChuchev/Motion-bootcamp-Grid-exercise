import React, { useEffect, useState } from 'react';
import FetchingData from './FetchingData'
import RenderingData from './RenderingData'

const DbAllRecords = function (props) {

    const { docId } = props.match.params;

    const apiUrl = docId ? `all/${docId}` : `all`;

    const allDocs = FetchingData(apiUrl)

    return RenderingData(allDocs);

    //   useEffect(() => {
    //     fetch('http://localhost:5050/all')
    //     .then(res => res.json())
    //     .then(docs => setData(docs))
    //   }, []);

    //        let allDocs = data.reduce((a,b) => {

    //             let deleteHref = `/delete/${b.id}`;
    //             let filterHref = `/filter/${b.department}`;

    //             let element = <tr>
    //                 <td className="delete">
    //                     <a href={deleteHref}>{b.id}</a>
    //                 </td>
    //                 <td>{b.first_name}</td>
    //                 <td>{b.last_name}</td>
    //                 <td>{b.email}</td>
    //                 <td>{b.job_title}</td>
    //                 <td className="filter">
    //                     <a href={filterHref}>{b.department}</a>
    //                 </td>
    //             </tr>;

    //             a.push(element);

    //             return a;

    //         }, []);

    //         return allDocs;

}

export default DbAllRecords;