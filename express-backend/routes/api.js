const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const api = express();
const Task = require('../models/task');
var mongoose = require('mongoose');


// Get All Tasks
router.get("/tasks", function(req, res, next) {
    
        Task.find({}).then(function(tasks){
        var records = [];

        for (t in tasks) {
            records.push({ 
              _id: tasks[t]._id,
                title: tasks[t].title,
                description: tasks[t].description,
                status: tasks[t].status,
                created_at: tasks[t].created_at,
                completed_at: tasks[t].completed_at,
                updated_at:tasks[t].updated_at
            });
        };

        res.contentType('application/json').status(200);
        res.send(records);
      }).catch(next);
  });

 // Get Single Task
router.get("/task/:id", function(req, res, next) {
  Task.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
  

//Save Task
router.post("/task", function(req, res, next) {
    var task = req.body;
    
    Task.create(task, function(err, task) {
        if (err) {
          res.send(err);
        }
        res.json(task);
      });   
    
    
  });


  // Delete Task
router.delete("/task/:id", function(req, res, next) {
  Task.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



  // Update Task
router.put("/task/:id", function(req, res, next) {
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;