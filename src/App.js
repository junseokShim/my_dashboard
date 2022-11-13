import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import GoogleChart from './components/CandleChart'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';


class App extends Component {
  constructor(props){
    // componet init (component 동작시 최초로 실행됨)
    super(props);
    this.state = {
    }
  }
  render() {
    

    return (
      <div className = "App">
        <Header></Header>
        <Row>
          <Col xs>
            <Sidebar></Sidebar>
          </Col>

          <Col xs={8}>
            <Container>
              <Col xs={8}>
                <GoogleChart></GoogleChart>
              </Col>
            </Container>
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default App;
