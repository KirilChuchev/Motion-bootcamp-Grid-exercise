import React, { useState } from 'react';
const Link = require('react-router-dom').Link

const DbFilterRecords = function (props) {

    let { criteria } = props.match.params;

    const [data, setData] = useState([]);

   fetch(`http://localhost:5050/filter/${criteria}`)
        .then(res => res.json())
        .then(docs => {
            return docs.reduce((a, b) => {

                let deleteHref = `/delete/${b.id}`;
                let filterHref = `/filter/${b.department}`;
        
                let element = <tr>
                    <td className="delete">
                        <a href={deleteHref}>{b.id}</a>
                    </td>
                    <td>{b.first_name}</td>
                    <td>{b.last_name}</td>
                    <td>{b.email}</td>
                    <td>{b.job_title}</td>
                    <td className="filter">
                        <a href={filterHref}>{b.department}</a>
                    </td>
                </tr>;
        
                a.push(element);
        
                return a;
            }, []);
        })
        .then(docs => setData(docs))

    // let allDocs = data.reduce((a, b) => {

    //     let deleteHref = `/delete/${b.id}`;
    //     let filterHref = `/filter/${b.department}`;

    //     let element = <tr>
    //         <td className="delete">
    //             <a href={deleteHref}>{b.id}</a>
    //         </td>
    //         <td>{b.first_name}</td>
    //         <td>{b.last_name}</td>
    //         <td>{b.email}</td>
    //         <td>{b.job_title}</td>
    //         <td className="filter">
    //             <a href={filterHref}>{b.department}</a>
    //         </td>
    //     </tr>;

    //     a.push(element);

    //     return a;
    // }, []);

    return data;


    // return data.map(x =>
    //     (<tr>
    //         <td className="delete">
    //             {/* <a href="#/delete/{{doc.docId}}">{x.id}</a> */}
    //             <Link to='/delete/{x.id}'>{x.id}</Link>
    //         </td>
    //         <td>{x.first_name}</td>
    //         <td>{x.last_name}</td>
    //         <td>{x.email}</td>
    //         <td>{x.job_title}</td>
    //         <td className="filter">
    //             {/* <a href="#/filter/{{this.department}}">{x.department}</a> */}
    //             <Link to='/filter/{x.id}'>{x.department}</Link>
    //         </td>
    //     </tr>))
}


export default DbFilterRecords;