const {PORT} = require('./config/index');
const express = require('express');

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
