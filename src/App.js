import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './sortingVisualizer/SortingVisualizer';
import SearchingVisualizer from './searchingVisualizer/SearchingVisualizer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="sorting">Algo Visualizer</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="sorting">Sorting</Nav.Link>
      <Nav.Link href="searching">Searching</Nav.Link>
      <Nav.Link href="graphs">Graphs</Nav.Link>
      <Nav.Link href="linkedList">Linked List</Nav.Link>
      <Nav.Link href="tree">Tree</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
        <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={SortingVisualizer}/>
            <Route exact path="/sorting" component={SortingVisualizer}/>
            <Route exact path="/searching" component={SearchingVisualizer}/>
          </Switch>
        </Router>
      </React.Fragment>
        
  
      </div>
    );
  }
}

export default App;
