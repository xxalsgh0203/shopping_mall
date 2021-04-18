import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {

    let history = useHistory();
    let { id } = useParams();
    let productDetailFound = props.shoes.find(function(product){
        return product.id==id
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (productDetailFound.id + 1) + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ productDetailFound.title }</h4>
                    <p>{ productDetailFound.content }</p>
                    <p>{ productDetailFound.price }</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();
                    }}>뒤로가기</button> 
                </div>
            </div>
        </div> 
    )
}


export default Detail;