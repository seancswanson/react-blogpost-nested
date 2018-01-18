import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

let post = {
  title:"Dinosaurs are awesome",
  body:"Check out this sweet body property",
  comments:["First!","Great post!","Hire this author RIGHT now!"],
  authors: ["Stealthy Stegosaurus", "Tiny T-Rex", "Ivory Iguanodon"]
}


ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments} allAuthors={post.authors}/>, 
  document.getElementById('root'));
registerServiceWorker();