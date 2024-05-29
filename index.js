require('dotenv').config({path: './.env'})
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
// connect to db.
const db = require('./db/db');
db();
app.use(express.json())
app.use('/api/v1/',require('./routers/index'));


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
