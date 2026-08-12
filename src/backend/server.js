const express = require('express');
const app = express();
app.disable('x-powered-by');
app.get('/', (req, res) => res.send('Hello world'));
app.get('/good-evening', (req, res) => res.send('Good evening'));
module.exports = app;
if (require.main === module) app.listen(process.env.PORT || 3001);
