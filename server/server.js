const express = require('express');
const path = require('path');
const app = express();

app.listen(8000, () => {
    console.log('Server running on port 8000');
})

app.use(express.static(path.join(__dirname, '/react-router-web/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/react-router-web/build', 'index.html'));
});