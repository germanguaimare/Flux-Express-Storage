var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

app.use(express.json());
app.use(express.urlencoded());

let initialItems = [
    {name: "Item 1", description: "Description 1", image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"},
    {name: "Item 2", description: "Description 2", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"},
    {name: "Item 3", description: "Description 3", image: "https://images.unsplash.com/photo-1597237154674-1a0d2274cef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},

]

app.get('/', (req, res)=>{
    res.send("This is the Cat Storage API!")
})

app.get('/items', (req, res) => {
    res.json(initialItems)
  })

app.post('/items', (req, res) => {
    const { body } = req;
    console.log(body)
    res.send("Enviaste un post")
  })


app.listen(
    4000, function(){
    console.log('API en ejecución en el puerto 4000');
})