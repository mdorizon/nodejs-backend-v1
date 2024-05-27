const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const itemsList = [
    {
        name: 'Item1',
        id: 1,
        price: 10.99
    },
    {
        name: 'Item2',
        id: 2,
        price: 20.99
    },
    {
        name: 'Item3',
        id: 3,
        price: 30.99
    }
]

app.get('/', function (req, res) {
    res.render("home", {
        title: "Hello from node",
        itemsList: itemsList,
    })
})

app.get('/additem', function(req, res) {
    itemsList.push({name: req.query.name, id: itemsList.length+1, price: req.query.price})
    res.redirect('/')
})

app.get('/items/:id', function(req, res) {
    function findID(list) {return list.id == req.params["id"];}
    res.render("single", {
        item: itemsList.find(findID),
    })
})

app.listen(3000, function(){
    console.info('Server is running on port 3000')
})