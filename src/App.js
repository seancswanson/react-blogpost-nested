import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <header className="App-header">
          <h1 className="App-title">{this.props.title}</h1>
          <Author allAuthors={this.props.allAuthors}/>
        </header>
        <p className="App-intro">
          {this.props.body}
        </p>
        <div className="comments">
          <h3>Comments:</h3>
          <ol>
          {this.props.comments.map( things => <li><p className="comment">{things}</p></li>)}
        </ol>
        </div>
      </div>
    );
  };
};

class Author extends Component {
  render() {
    return (
      <div className="Author">
      <h4>Written By</h4>
      <ul className="noBullet">
      { this.props.allAuthors.map( things => <li><p className="allAuthors">{things}</p></li>) }
      </ul>
      </div>
      );
  }
}

export default Post;