import React from "react";

// // Began life as a functional component
// const Box = (props) => (
//   <div className="box">
//     {props.text}
//   </div>
// );

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.addEventListener("ended", (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove("active");
    });
  }

  playSound = () => {
    //console.log(this.audio.current);
    const parent = this.audio.current.parentNode;
    parent.classList.add("active");
    this.audio.current.play();

    const sound = this.audio.current.id;
    //console.log(this.audio.current.sound);
    const display = parent.parentNode;
    display.querySelector("h1").innerText = sound;
  };

  render() {
    const { text, audio, name } = this.props;

    return (
      <div className="drum-pad" onClick={this.playSound} id={name}>
        {text}
        <audio
          ref={this.audio}
          src={audio}
          className="clip"
          id={text}
          sound={name}
        />
      </div>
    );
  }
}

document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    //console.log(audio);
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add("active");
    audio.play();
  }
});

export default DrumPad;
