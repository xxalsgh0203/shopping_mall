import React, {useState} from 'react';
import ShoesinStock from './ShoesinStock.js'
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.scss'

function Home(props) {
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
                    props.shoes.map(function(shoe, i){
                        return (
                        <Link to={"/detail/" + i}><ShoesinStock shoes={ shoe } i={i} key={i}/></Link>
                        )  
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Home;