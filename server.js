const express = require('express');
const cors = require('cors');
const httpProxyMiddleware = require('http-proxy-middleware');
const morgan = require('morgan');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PROXY_PORT || 3007;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('./'));
app.use(express.json);
app.use(express.urlencoded());

const ymalhost = '3.22.100.126'

// app.use('/api/shoes/:id/relatedproducts', (req, res) => {
//   const url= `${ymalhost}/api/shoes${req.url}`
//   fetch(url)
//     .then(response => response.json())
//     .then(json => res.json(json))
//     .catch(err => {
//       console.log(err);

//     });
// })

app.listen(PORT, () => console.log('Listening on port: ' + PORT)); 