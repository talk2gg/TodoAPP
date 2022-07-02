const express = require('express')

const connect  = require('./config/database')
const todoRoute = require('./router/todoRoutes')

connect()

const app = express()
app.use(json())
app.use('/todo', todoRoute)


const PORT = process.env.PORT || 4000

app.get('/', (req, res) =>{
    res.send('Zuri training')
})
app.listen(PORT, () => console.log(`Serving on port ${PORT}`))