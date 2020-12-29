const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./api/users/user.router');
const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/users/', userRouter);


app.listen(process.env.APP_PORT, () => {
    console.info(`Server is listening on port ${process.env.APP_PORT}`);
})