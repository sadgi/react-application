import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/task'+this.props.match.params.id)
      .then(res => {
        this.setState({ task: res.data });
        console.log(this.state.task);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:3000/api/task'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.task.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Task List</Link></h4>
            <dl>
              <dt>Title:</dt>
              <dd>{this.state.task.title}</dd>
              <dt>Description:</dt>
              <dd>{this.state.task.description}</dd>
              <dt>Status:</dt>
              <dd>{this.state.task.status}</dd>
              <dt>Creation Date:</dt>
              <dd>{this.state.task.creation_date}</dd>
              <dt>Updatation Date:</dt>
              <dd>{this.state.task.updation_date}</dd>
              <dt>Completion Date:</dt>
              <dd>{this.state.task.completion_date}</dd>
            </dl>
            <Link to={`/edit/${this.state.task._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.task._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;