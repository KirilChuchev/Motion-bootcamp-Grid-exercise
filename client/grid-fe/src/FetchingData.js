import React, {useEffect, useState} from 'react';

const GetDocs = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5050/${url}`)
        .then(response => response.json())
        .then(docs => setData(docs))
        .catch(console.log)
    }, [url]);

    return data;
}

export default GetDocs;
