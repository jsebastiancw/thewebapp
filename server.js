const express = require('express');
const app = new express();
const ejs = require('ejs');

app.set('view engine', 'ejs')

app.use(express.static('public')); 

app.get('/',(req,res)=>{
    res.render("index");
})


let port = process.env.PORT;
if (port == null || port == "") {
port = 4000;
}
app.listen(port, ()=>{
console.log('App listening...')
})