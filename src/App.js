import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Navbar.Brand href="#home">ShoeCompany</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
          <div className="col-md-4"> {/*12개 중 4개의 column 을 사용 (3등분) + 모바일에서 세로정렬 */}
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
