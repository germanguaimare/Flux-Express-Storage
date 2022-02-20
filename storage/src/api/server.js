const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())

let initialItems = [
    {name: "Item 1", description: "Description 1", image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"},
    {name: "Item 2", description: "Description 2", image: "https://images.unsplash.com/photo-1575221241714-b8d56bded0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80"},
    {name: "Item 3", description: "Description 3", image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"},
    {name: "Item 4", description: "Description 4", image: "https://images.unsplash.com/photo-1575221241714-b8d56bded0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80"},
    {name: "Item 5", description: "Description 5", image: "https://images.unsplash.com/photo-1575221241714-b8d56bded0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80"}

]

app.get('/', (req, res)=>{
    res.send("This is the Cat Storage API!")
})

app.get('/items', (req, res) => {
    res.json(initialItems)
  })


app.listen(
    4000, function(){
    console.log('API en ejecución en el puerto 4000');
})