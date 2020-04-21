const express = require('express');
const api = require('./routes/api.js')
const url = require('url');
const cors = require('cors');
const port = 5050;

let app = express();

app.use(cors());

// app.get('/', (req, res) => {
//     let urlObj = url.parse(req.url);
//     res.json(urlObj);
// });

app.use('/', api);



// app.use(function(err, req, res, next){
//     console.error(err.stack);
//     res.status(500).send('server error')
// })

app.listen(port, () => console.log(`listening port ${port}`));
