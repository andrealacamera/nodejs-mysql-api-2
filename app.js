const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/api', (req,res) => {
    res.status(200).json({
        success: 1,
        message: "ok, success!"
    })
});

app.listen(process.env.APP_PORT, () => {
    console.info(`Server is listening on port ${process.env.APP_PORT}`);
})