var express = require('express')
var cors = require('cors')
var app = express()
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

const accessTokenSecret = 'catstoragesecret';

let initialItems = [
  { name: "The fiercest guy", description: "A true lion", image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" },
  { name: "Catpheus", description: "The guy from Catrix", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" },
  { name: "True life Garfield", description: "ZzZzZzZzZzZ", image: "https://images.unsplash.com/photo-1597237154674-1a0d2274cef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" },

]

let users = [
  { username: "gguaimare", password: "gguaimare" }
]

app.get('/', (req, res) => {
  res.send("This is the Cat Storage API!")
})

app.get('/items', (req, res) => {
  res.json(initialItems)
})

app.post('/items', (req, res) => {
  const { body } = req;
  if (body.name && body.description && body.image) {
    initialItems.push(body)
    res.send("You succesfully sent a post")
  }
  else {
    res.send("Your post is missing important data")
  }
})

app.delete('/items', (req, res) => {
  const { body } = req;
  if (body.index) {
    initialItems.splice(body.index, 1)
    res.send(`You deleted the item with index ${body.index}`)
  }
  else {
    res.send("There was an issue with your request")
  }
})

app.put('/items', (req, res) => {
  const { body } = req;
  if (body) {
    let toEdit = initialItems[body.index]
    toEdit.name = body.name
    toEdit.description = body.description
    toEdit.image = body.image
    res.send("PUT request sent")
  }

})

app.post('/users', (req, res) => {
  const { body } = req;
  if (body.newUsername && body.newPassword) {
    let exists = users.find(users => users.username === body.newUsername);
    if (exists) {
      res.send("That username already exists")
    } else {
      users.push({ username: body.newUsername, password: body.newPassword })
      res.send("New user created")
      
    }
  }
  else {
    res.send("Your post is missing important information")
  }
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => { return u.username === username && u.password === password });
  

  if (user) {
    const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);
    res.json({
      accessToken, username
    });
  } else {
    res.send('Incorrect username or password');
  }
});



app.listen(
  4000, function () {
    console.log('API en ejecución en el puerto 4000');
  })