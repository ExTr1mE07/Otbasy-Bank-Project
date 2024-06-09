const express = require('express');

const app = express(); 

app.use(express.static(__dirname + '/public'))

app.set("view engine", "ejs")



app.get('/page0' , (req , res) => {
    res.render("page-0")
})
app.get('/page1' , (req , res) => {
    res.render("page-1")
})

app.get('/page2' , (req , res) => {
    res.render("page-2")
})

app.get('/page3' , (req , res) => {
    res.render("page-3")
})

app.get('/page4' , (req , res) => {
    res.render("page-4")
})

app.get('/page5' , (req , res) => {
    res.render("page-5")
})

app.get('/page6' , (req , res) => {
    res.render("page-6")
})

app.get('/page7' , (req , res) => {
    res.render("page-7")
})

app.get('/page8' , (req , res) => {
    res.render("page-8")
})

app.get('/page9' , (req , res) => {
    res.render("page-9")
})

app.get('/page10' , (req , res) => {
    res.render("page-10")
})




const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})