const express=require('express');
const path=require('path');
require('dotenv').config();

const port=process.env.PORT || 3000;

const app=express();
app.use(express.static(path.join(__dirname,'./build')));

app.get('/work',(req,res)=>{
    res.send('server working');
});

app.listen(port,()=>{
    console.log('server started at port '+port);
});


