import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/task/' + this.props.match.params.id)
      .then(res => {
        this.setState({ task: res.data });
        console.log(this.state.task);
      });
  }

  onChange = (e) => {
    const state = this.state.task
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, status, created_at, updated_at, completed_at } = this.state;

    axios.put('http://localhost:3000/api/task/' + this.props.match.params.id, { title, description, status, created_at, updated_at, completed_at })
      .then((result) => {
        console.log(result);
        this.props.history.push("/show/" + this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Task
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={'/show/' + this.state.task._id}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Task List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.task.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.task.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={this.state.task.status} onChange={this.onChange} placeholder="Status" />
              </div>
              <div class="form-group">
                <label for="created_at">Creation Date:</label>
                <input type="text" class="form-control" name="created_at" value={this.state.task.created_at} onChange={this.onChange} placeholder="Creation Date" />
              </div>
              <div class="form-group">
                <label for="updated_at">Updation Date:</label>
                <input type="text" class="form-control" name="updated_at" value={this.state.task.updated_at} onChange={this.onChange} placeholder="Updation Date:" />
              </div>
              <div class="form-group">
                <label for="completed_at">Completion Date:</label>
                <input type="text" class="form-control" name="completed_at" value={this.state.task.completed_at} onChange={this.onChange} placeholder="Completion Date" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;



