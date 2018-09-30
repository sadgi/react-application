import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      status: '',
      created_at: '',
      deleted_at: '',
      completed_at:''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, status, created_at, updated_at, completed_at  } = this.state;

    axios.post('http://localhost:3000/api/task', { title, description, status, created_at, updated_at, completed_at  })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const {  title, description, status, created_at, updated_at, completed_at } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD TASK  
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Task List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
              <label for="status">Status:</label>
              <input type="text" class="form-control" name="status" value={status} onChange={this.onChange} placeholder="Status" />
            </div>
              <div class="form-group">
                <label for="created_at">Creation Date:</label>
                <input type="text" class="form-control" name="created_at" value={created_at} onChange={this.onChange} placeholder="Creation Date" />
              </div>
              <div class="form-group">
                <label for="updated_at">Updation Date:</label>
                <input type="text" class="form-control" name="updated_at" value={updated_at} onChange={this.onChange} placeholder="Updation Date" />
              </div>
              <div class="form-group">
                <label for="completed_at">Completion Date:</label>
                <input type="date" class="form-control" name="completed_at" value={completed_at} onChange={this.onChange} placeholder="Completion Date" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;