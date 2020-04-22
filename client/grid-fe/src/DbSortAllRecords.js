import React from 'react';
import FetchingData from './FetchingData';
import RenderingData from './RenderingData';

const DbSortAllRecords = (props) => {

    const { criteria } = props.match.params;
    
    const apiUrl = `sort/${criteria}`;

    const sortedRecords = FetchingData(apiUrl);

    return RenderingData(sortedRecords)
}

export default DbSortAllRecords;