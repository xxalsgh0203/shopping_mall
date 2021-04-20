import './App.css';
import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import ProductInfo from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail.js';
import Home from './components/Home.js';

function App() {

  let [shoes, changeShoes] = useState(ProductInfo);
  let [stock, updateStock] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Navbar.Brand href="/">ShoeCompany</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/"> Home </Nav.Link> 
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch> {/*하나의 Route만 보여주도록 함 */}
        <Route exact path="/">
          <Home shoes={shoes}/>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={ shoes } stock = {stock} updateStock={updateStock}/>
        </Route>
      </Switch>        
    </div>
  );
}



export default App;
