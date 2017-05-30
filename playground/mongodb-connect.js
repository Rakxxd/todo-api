const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect '+ err);
        
    }
    console.log('Connected to MongoDB server');

//     db.collection('Todos').insertOne({
//       text: 'Something left',
//       completed: false

//     },(err,result)=>{
//    if(err){
//        console.log('Unable To Inset todo' +err);

//    }

//    console.log(JSON.stringify(result.ops,undefined,2));
//     });



    db.close();
});