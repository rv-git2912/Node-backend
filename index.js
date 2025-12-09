require('dotenv').config()


const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('rvvish')
})

app.get('/login' , (req,res) =>{
    res.send('<h1> Jai Siya Ram </h1>')

})

app.get('/myself' , (req,res)=>{
    res.send('<h2> I am Reet Vish </h2>')
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})