// const express = require('express')

// const app = express()

// app.listen(4000, () => {
// console.log('Server listening and running on port 4000!')
// })

const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.write('Displaying this plain text to the clients browser and confirm change...')   
    res.end()
})

server.listen(5500, ()=>{
    console.log('The server is running on port 5500 while listening to incoming request...')
})