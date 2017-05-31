const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect '+ err);
        
    }
    console.log('Connected to MongoDB server');
   
db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
   console.log(result);
});






// db.collection('Todos').find({
//     _id: new ObjectID('592da1bc08f4023e38d5d428')

// }).toArray().then((docs) =>{
//    console.log('Todos');
//    console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('Unable to fetch'+err);
// });


// db.collection('Todos').find().count().then((count) =>{
//    console.log('Todos count: ' + count);
   
// },(err)=>{
//     console.log('Unable to fetch'+err);
// });

   // db.close();
});