const express = require('express')
const app = express()

const port = 3000

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})

app.get('/', (req, res)=>{
    res.send(`<h1 style="color:green">WELCOME TO THE HOME </h1><button><a href="/cats">cats</a></button>
    <form action="/search"><input type="text" name="name"></form>`)
})

app.get('/cats', (req, res)=>{
    res.send(`<h1 style="color:green"> welcome to the cats page </h1><button><a href="/">homepage</a></button>`)
})
app.get('/search/:name', (req, res)=>{
    const {name} = req.params
    res.send(`<h1 style="color:green">search result for ${name}</h1>`)
})
app.get('/search', (req, res)=>{
    const {name} = req.query
    res.send(`<h1 style="color:green">search result for ${name}</h1>`)
})