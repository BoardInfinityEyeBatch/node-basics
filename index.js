const express = require('express')

const app = express()

const port = 3000

app.get('/', (req,res)=> res.send("I am on Home page 10"))

app.get('/login',(req,res)=> res.send("I am on Login page"))

app.post('/', (req,res)=> res.send("I am on Post api"))
app.post('/login', (req,res)=> res.send("I am on Post api on login"))



// this line helps you to run the app at specific port
app.listen(port, () => console.log("My sever is runnung"))

