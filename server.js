const express = require('express');
const cors = require('cors');
const httpProxyMiddleware = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PROXY_PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('./'));

// app.get('/api/models/${this.state.productcode}/reviews', 
//   axios.get('http://localhost:3003/api/models/${this.state.productcode}/reviews`)
//     .then(response => response.data)
//   )

app.listen(PORT, () => console.log('Listening on port: ' + PORT)); 