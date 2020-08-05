import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


const api= axios.create({
baseURL: `http://anapioficeandfire.com/api/characters/16`
})

class App extends Component {

constructor(){
  super();
 api.get('/').then(res => {
   console.log(res.data)
 })
}
render(){
  return (
    <div className="App">
    
    </div>
  );
}
}
  

export default App;
