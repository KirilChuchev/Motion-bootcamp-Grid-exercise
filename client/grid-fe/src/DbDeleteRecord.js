import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FetchingData from './FetchingData';
import RenderingData from './RenderingData';

const DbDeleteRecord = function (props) {

    let { docId } = props.match.params;
    let { history } = props;

    const apiUrl = `delete/${docId}`;

    // const [data, setData] = useState([]);

    // FetchingData(apiUrl);

    useEffect(() => {
        fetch(`http://localhost:5050/${apiUrl}`)
        // .then(response => response.json())
        // .then(docs => setData(docs))
        .catch(console.log)
    }, []);

    // const allDocAfterDeletion = FetchingData('all');

    // return RenderingData(allDocAfterDeletion);

    // let history = useHistory();
    history.push('/');

    return <p></p>


    // return RenderingData(allDocAfterDeletion);

    // fetch(`http://localhost:5050/delete/${docId}`)
    //     .then(res => res.json())
    //     .then(docs => setData(docs));

    // fetch(`http://localhost:5050/delete/${docId}.json`, {
    //     method: 'DELETE'
    // })
    //     .then(response => {

    //         fetch('http://localhost:5050/all')
    //             .then(res => res.json())
    //             .then(docs => setData(docs))
    //     });

        
//   useEffect(() => {
    
//     fetch(`http://localhost:5050/delete/${docId}.json`, {
//         method: 'DELETE'
//     })
//         .then(response => {

//             fetch('http://localhost:5050/all')
//                 .then(res => res.json())
//                 .then(docs => setData(docs))
//         });
//   }, []);



//     return data.map(x =>
//         (<tr>
//             <td className="delete">
//                 <a href="#/delete/{{doc.docId}}">{x.id}</a>
//             </td>
//             <td>{x.first_name}</td>
//             <td>{x.last_name}</td>
//             <td>{x.email}</td>
//             <td>{x.job_title}</td>
//             <td className="filter">
//                 <a href="#/filter/{{this.department}}">{x.department}</a>
//             </td>
//         </tr>))


}




export default DbDeleteRecord