import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <div>The world's coolest webpage
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
