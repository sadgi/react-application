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
    Task.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(
      err,
      task
    ) {
      if (err) {
        res.send(err);
      }
      res.json(task);
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
    Task.remove({ _id: mongojs.ObjectId(req.params.id) }, function(
      err,
      task
    ) {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  });


  // Update Task
router.put("/task/:id", function(req, res, next) {
  var task = req.body;
  var updTask = {};


  if (task.title) {
    updTask.title = task.title;
  }
  if(task.description){
      updTask.description=task.description;
  }
  if(task.status){
      updTask.status=task.status;
  }
  if(task.created_at){
    updTask.created_at=task.created_at;
}
if(task.updated_at){
    updTask.updated_at=task.updated_at;
}
if(task.completed_at){
    updTask.completed_at=task.completed_at;
}

  if (!updTask) {
    res.status(400);
    res.json({
      error: "Bad Data"
    });
  } else {
    Task.update(
      { _id: mongojs.ObjectId(req.params.id) },
      updTask,
      {},
      function(err, task) {
        if (err) {
          res.send(err);
        }
        res.json(task);
      }
    );
  }
});
module.exports = router;