const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const dataFilePath = '../public/js/MOCK_DATA.js';
let isFiltered = '';

function readFile(dataFilePath) {
    return allData = fs.readFileSync(path.resolve(__dirname, dataFilePath), { encoding: 'utf-8' });
}

function writeFile(dataFilePath, data) {
    return fs.writeFileSync(path.resolve(__dirname, dataFilePath), JSON.stringify(data));
}

router.get('/all', (req, res) => {

    let allDocs = JSON.parse(readFile(dataFilePath));

    res.json(allDocs);
});

// замести с: router.delete
router.get('/delete/:docId', (req, res) => {

    let { docId } = req.params;

    let allDocs = JSON.parse(readFile(dataFilePath));

    allDocs = allDocs.filter(x => x.id !== +docId);

    // res.json(allDocs);

    writeFile(dataFilePath, allDocs);

});

router.get('/sort/:criteria', (req, res) => {

    let { criteria } = req.params;

    let allDocs = JSON.parse(readFile(dataFilePath));

    const sortOptions = {
        identification: (data) => data.sort((a, b) => Number(a['id']) - (Number(b['id']))),
        firstName: (data) => data.sort((a, b) => a['first_name'].localeCompare(b['first_name'])),
        lastName: (data) => data.sort((a, b) => a['last_name'].localeCompare(b['last_name'])),
        email: (data) => data.sort((a, b) => a['email'].localeCompare(b['email'])),
        position: (data) => data.sort((a, b) => a['job_title'].localeCompare(b['job_title'])),
        department: (data) => data.sort((a, b) => a['department'].localeCompare(b['department'])),
    }

    allDocs = sortOptions[criteria](allDocs);

    res.json(allDocs);

    writeFile(dataFilePath, allDocs);
});

router.get('/filter/:criteria', (req, res) => {

    let { criteria } = req.params;

    let allDocs = JSON.parse(readFile(dataFilePath));

    if (isFiltered) {
        res.json(allDocs);
        isFiltered = false;
        return;
    }

    filteredData = allDocs.filter(x => x.department === criteria);

    isFiltered = true;

    res.json(filteredData);

});


module.exports = router;