const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '592edeadf9d5b0d56d45092e';

// Todo.find({
//     _id: id 
// }).then((todos) => {
//     console.log('Todos ',todos);
// })

// Todo.findOne(
//     {
//     _id: id 
// }).then((todo) => {
//     console.log('Todo ',todo);
// }
// )

User.find({
    _id: id
}).then((user)=>{
    console.log('User', user);
})

