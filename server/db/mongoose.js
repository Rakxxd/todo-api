var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://rakx:rakranjan@ds161021.mlab.com:61021/todosrakxxd');

module.export = {mongoose};