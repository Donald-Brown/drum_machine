import React from "react";
import "./css/App.css";
import "./css/DrumPad.css";
import DrumPad from "./components/DrumPad";

const sounds = [
  {
    keyCode: 81,
    key: "Q",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1",
  },
  {
    keyCode: 87,
    key: "W",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2",
  },
  {
    keyCode: 69,
    key: "E",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater-3",
  },
  {
    keyCode: 65,
    key: "A",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4",
  },
  {
    keyCode: 83,
    key: "S",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
  },
  {
    keyCode: 68,
    key: "D",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open-HH",
  },
  {
    keyCode: 90,
    key: "Z",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick-n'-Hat",
  },
  {
    keyCode: 88,
    key: "X",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    name: "Punchy-Kick",
  },
  {
    keyCode: 67,
    key: "C",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed-HH",
  },
];

const App = () => (
  <div className="container" id="drum-machine">
    <div id="display" className="display">
      <h1>Press a pad</h1>
      {sounds.map((sound, index) => (
        <DrumPad
          text={sound.key}
          key={index}
          audio={sound.audio}
          name={sound.name}
        />
      ))}
    </div>
  </div>
);

export default App;

// // began as class based component

// class App extends React.Component {
//   state = {
//     keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
//   }

//   render() {
//     const { keys } = this.state;

//     return (
//       <div className="container" id="drum-machine">
//         <div id="display" className="display">
//           {keys.map((key, index) => (
//             <Box text={key} key={index} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
