var mongoose = require('mongoose')
var Schema = mongoose.Schema

// schema
var taskSchema = new Schema({
    
    title: String,
    description: String,
    status:String,
    due_date:String,
    created_at: String,
    updated_at: String,
    completed_at: String
    
});

// create model from schema
var Task = mongoose.model('Task', taskSchema);

module.exports = Task;