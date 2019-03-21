import React from 'react';
const fs = require('fs');

export default class App extends React.Component {
  componentDidMount() {
    document.addEventListener('drop', (e) => {
      console.log('hi');
      e.preventDefault();
      e.stopPropagation();
      console.log(e.dataTransfer.files);
      // for (let f of e.dataTransfer.files) {
      //   console.log('File(s) you dragged here: ', f.path);
      // }
      console.log(__dirname + '../package.json');
      fs.readFile(__dirname + '../package.json', (err, data) => {
        console.log(data);
      })
    })

    document.addEventListener('dragover', (e) => {
      console.log('hi');
      e.preventDefault();
      e.stopPropagation();
    })
  }

  render() {
    console.log('hi');
    return (
      <div>
        <h2>Welcome asd to React!</h2>
      </div>
    );
  }
}
