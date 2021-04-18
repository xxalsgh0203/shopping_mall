import './App.css';
import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import ProductInfo from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js'

function App() {

  let [shoes, changeShoes] = useState(ProductInfo);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Navbar.Brand href="#home">ShoeCompany</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
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
          <Jumbotron className="jumbo">
            <h1>20% Season OFF</h1>
            <p>
              with a $120 purchase. Choose your color & size, add to cart, & use code SHOECOMP. While supplies last
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container"> {/*좌우 여백을 예쁘게 잡아줌 (Bootstrap 문법)*/}
            <div className="row"> {/*사이트를 열두개의 column 으로 쪼개겠습니다 */}
            {
              shoes.map(function(shoe, i){
                return (
                  <ShoesinStock shoes={ shoe } i={i} key={i}/>
                )  
              })
            }
            </div>
          </div>
        </Route>

        <Route path="/detail">
            <Detail />
        </Route>
      </Switch>        
    </div>
  );
}

function ShoesinStock(props) {
  return (
    <div className="col-md-4"> {/*12개 중 4개의 column 을 사용 (3등분) + 모바일에서 세로정렬 */}
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;
