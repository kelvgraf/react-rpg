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
  top: calc(${props => props.position[1]} * 35px);
  left: calc(${props => props.position[0]} * 35px);
  width: 35px;
  height: 35px;

  background: url(${sprite});
  background-position: ${props => props.positionPerson};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: [0, 0],
      positionPerson: '0 0'
    };
  }
  componentDidMount() {
    window.addEventListener("keyup", this.move)
  }

  move = event => {
    const { position } = this.state;
    let newPosition = position;
    switch (event.keyCode) {
      case 40:
      case 83:
        if (position[1] + 1 >= 0 && position[1] + 1 < 20) {
          newPosition = [position[0], position[1] + 1];
          this.setState({
            positionPerson: '0 0',
          })
        }
        break
      case 38:
      case 87:
        if (position[1] - 1 >= 0 && position[1] - 1 < 20) {
          newPosition = [position[0], position[1] - 1];
          this.setState({
            positionPerson: '0 70px',
          })
        }
        break
      case 39:
      case 68:
        if (position[0] + 1 >= 0 && position[0] + 1 < 20) {
          newPosition = [position[0] + 1, position[1]];
          this.setState({
            positionPerson: '0 107px',
          })
        }
        break
      case 37:
      case 65:
        if (position[0] - 1 >= 0 && position[0] - 1 < 20) {
          newPosition = [position[0] - 1, position[1]]
          this.setState({
            positionPerson: '0 37px',
          })
        }
        break
      default:
        return;
    }

    this.setState({
      position: newPosition,
    })
  }

  render() {
    const { position, positionPerson } = this.state;

    return (
      <Container>
        <Map>
          <Person position={position} positionPerson={positionPerson} />
        </Map>
      </Container>
    );
  }
}

export default App;
