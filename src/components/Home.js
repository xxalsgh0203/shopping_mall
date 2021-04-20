import React, {useState} from 'react';
import ShoesinStock from './ShoesinStock.js'
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.scss';
import axios from 'axios';

function Home(props) {
    let [shoes, changeShoes] = useState(props.shoes);

    return (
        <div>
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
                            <Link to={"/detail/" + i}><ShoesinStock shoes={ shoe } i={i} key={i}/></Link>
                        )  
                    })
                }
                </div>
            </div>

            <button className="btn btn-primary" onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                    changeShoes([...shoes, ...result.data]); // state 빨리빨리 변경하는 일종의 테크닉
                }) // ajax 성공했을때
                .catch(); // ajax 실패했을때

            }}>더보기</button>
        </div>
    )
}

export default Home;