import './App.css';
import React, {useState, lazy, Suspense} from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import ProductInfo from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail.js';
// let Detail = lazy(()=>{ import('./components/Detail.js') });
// 바로 Detail 을 load 하지 않고 사용할때 로드
import Home from './components/Home.js';
import Cart from './components/Cart.js';
import RecentView from './components/RecentView.js';

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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/recentview">Recent View</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
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

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/recentview">
          <RecentView shoes={ shoes }></RecentView>
        </Route>
      </Switch>        
    </div>
  );
}



export default App;
