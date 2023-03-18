const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send('Nice work, Yushan!!!');
});

app.get('/about', (req, res) => {
 res.status(418);
 res.set('X-Yushan', 'Hello Friend')
 res.send('atta-boy')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
