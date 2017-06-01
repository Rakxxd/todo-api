var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app =express();

app.use(bodyparser.json());
const port = process.env.PORT || 3000;



app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res)=> {
  Todo.find().then((todos)=>{
      if(!todos){
          return res.send({message:'no records'});
      }
      res.send({
          todos});

      },(e) => {

      res.status(400).send(e);
  })
});

app.get('/todos/:id',(req,res)=> {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
    return res.status(404).send({
        message: 'Error Id'
    });
}
    console.log(req.params.id);
    Todo.find({
        _id :id
    }).then((todos)=>{
        if(!todos){
            return res.status(404).send({message: 'id not associated'});
        }
        res.send({todos});
    },(e) =>{
          res.status(400).send(e);
    })    
});



app.listen(port,()=>{
    console.log('Started on port  ', port);
});


module.exports = {app};
