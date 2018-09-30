import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import sort from 'fast-sort';
import axios from 'axios';

class Sort extends Component {

  constructor(props) {
    super(props);
    this.toggleSortDate = this.toggleSortDate.bind(this)
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/tasks")
      .then(res => {
        this.setState({ tasks: res.data });
        console.log(this.state.tasks);
      });
  }

  toggleSortDate (event) {
    const {tasks} = this.state
    let new_tasks = tasks;
    sort(new_tasks).asc(u => u.title);
    this.setState({
        tasks:new_tasks
      })
  }
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              TASK DETAILS
            </h3>
          </div>
          <div class="panel-body">
          <button onClick={this.toggleSortDate}>Order by date</button>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Created_at</th>
                  <th>Updated_at</th>
                  <th>Completed_at</th> 
                  
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map(task =>
                  <tr>
                    <td><Link to={'/show/'+task._id}>{task.title}</Link></td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.created_at}</td>
                    <td>{task.updated_at}</td>
                    <td>{task.completed_at}</td>
                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;