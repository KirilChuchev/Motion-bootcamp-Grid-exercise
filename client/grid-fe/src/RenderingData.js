import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RenderingData = (arr) => {

    return arr.reduce((a, b) => {

        let element = <tr>
            <td className="delete">
                <Link to={`/delete/${b.id}`}>{b.id}</Link>
            </td>
            <td>{b.first_name}</td>
            <td>{b.last_name}</td>
            <td>{b.email}</td>
            <td>{b.job_title}</td>
            <td className="filter">
                <a href={`/filter/${b.department}`}>{b.department}</a>
                {/* <Link to={`/filter/${b.department}`}>{b.department}</Link> */}
            </td>
        </tr>;

        a.push(element);

        return a;
    }, []);
}

export default RenderingData;