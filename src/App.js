import React, { Component } from 'react';
import styled from 'styled-components';

import sprite from './img/sprite.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Map = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  background-color: green;
`;

const Person = styled.div`
  position: absolute;
  top: ${props => props.position[1]}px;
  left: ${props => props.position[0]}px;
  width: 35px;
  height: 35px;

  background: url(${sprite});
  background-position: 0 0;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: [0, 0],
      moving: 0
    };
  }

  tete = () => {
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
    }
    const { position, moving } = this.state;
  
    switch (event.key) {
      case "ArrowDown": 
      this.setState({moving: 35, position: [position[0]+35,position[1]]});
        break;
      case "ArrowUp":
        alert("Key pressed is: " + event.key);
        break;
      case "ArrowRight":
        alert("Key pressed is: " + event.key);
        break;
      case "ArrowLeft":
        alert("Key pressed is: " + event.key);
        break;
      default:
        return;
    }
  

    event.preventDefault();
  }, true);
}

MyFunction = (ev) => {
  const { position, moving } = this.state;
  if(ev.key  === 'ArrowRight' || ev.key  === 'd') {
    position[0] < 665 && this.setState({moving: 35, position: [position[0]+35,position[1]]});
  } 

  if(ev.key  === 'ArrowLeft' || ev.key  === 'a') {
    position[0] > 0 && this.setState({moving: 100, position: [position[0]-35,position[1]]});
  }
  if(ev.key  === 'ArrowUp' || ev.key  === 'w') {
    position[1] > 0 && this.setState({moving: 65, position: [position[0],position[1]-35]})
  }
  if(ev.key  === 'ArrowDown' || ev.key  === 's') {
    position[1] < 665 && this.setState({moving: 0, position: [position[0],position[1]+35]})
  }
}

  render() {
    const { position, moving } = this.state;

    return (
      <Container onKeyUp={this.tete()}>
      <Map>
        <Person position={position} moving={moving} />
      </Map>
      </Container>
    );
  }
}

export default App;
