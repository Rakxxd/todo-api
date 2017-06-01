var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rakx:rakranjan@ds161021.mlab.com:61021/todosrakxxd');

module.export = {mongoose};