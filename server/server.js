const express = require('express');
const bodyparser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {cors} = require('cors');


var app =express();
app.use(cors());

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

app.patch('/todos/:id',(req,res) => {
   var id =req.params.id;
   var body = _.pick(req.body, ['text','completed']);
    if(!ObjectID.isValid(id)){
    return res.status(404).send({
        message: 'Error Id'
    });
}
  if(_.isBoolean(body.completed)&& body.completed) {
      body.completedAt = new Date().getTime();
  } else{
      body.completed = false;
      body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, {$set:body},{new: true}).then((todo) => {
             if(!todo){

             }
             res.send({todo});
  }).catch((e)=> {
      res.status(400).send();
  })

});



app.listen(port,()=>{
    console.log('Started on port  ', port);
});


module.exports = {app};
