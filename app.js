const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/tododb'
const app = express()
const PORT = process.env.PORT || 4000

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected to db')
})
app.get('/', (req, res) =>{
    res.send('Zuri training')
})
app.listen(PORT, () => console.log(`Serving on port ${PORT}`))