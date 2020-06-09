import React from 'react';
import './css/App.css';
import './css/Box.css';
import Box from './components/Box';

class App extends React.Component {
  state = {
    keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  }

  render() {
    const { keys } = this.state;

    return (
      <div className="container" id="drum-machine">
        <div id="display" className="display">
          {keys.map((key, index) => (
            <Box text={key} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
