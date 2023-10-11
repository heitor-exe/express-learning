const express = require('express')
const app = express()

// porta do servidor
const port = 3000

// Reposta do servidor "Hello World!"
// na URL raiz (/)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`)
})
