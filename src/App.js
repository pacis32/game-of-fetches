import React from 'react';
import './App.css';
import axios from 'axios'


axios.all([
  axios.get('http://anapioficeandfire.com/api/characters/16'),
  axios.get('http://www.anapioficeandfire.com/api/houses/378'),
  axios.get(' http://www.anapioficeandfire.com/api/houses/229'),
  axios.get('  http://www.anapioficeandfire.com/api/houses/17'),
  axios.get('   http://www.anapioficeandfire.com/api/characters/901'),
  axios.get('   http://www.anapioficeandfire.com/api/characters/901'),

])
.then(response => {
  console.log('Date created: ', response[0].data.created_at);
  console.log('Date created: ', response[1].data.created_at);
});

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
