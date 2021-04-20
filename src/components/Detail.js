import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';


let DetailBox = styled.div`
    padding-top : 30px;
`;

let DetialTitle = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;

function Detail(props) {

    let [alertbox, updatealertbox] = useState(true);
    let history = useHistory();
    let { id } = useParams();
    let productDetailFound = props.shoes.find(function(product){
        return product.id==id
    });

    
    // useEffect hook. life cycle hook 과 비슷한 역할을 한다.
    // 2초뒤에 alert 창 사라지게
    // 밑에 useEffect 는 Detail 이 나타나거나 업데이트 되자마자 실행
    useEffect(()=>{
        let timer = setTimeout(()=>{updatealertbox(false)}, 2000);
        return ()=>{clearTimeout(timer)}; // Detail component 가 사라질때 timer 를 제거해줌. (버그를 염두해두며 코딩할수있음 예를들어 2초가 되기전에 뒤로가기누르면 나중에 버그가생길수있음)
    }, []); // [..] 라는 state 가 변경될때만 실행되도록함. 빈칸이면 Detail 등장시 한번 실행하고 끝남
    
    return (
        <div className="container">
            <DetailBox>
                <DetialTitle className="red">Details</DetialTitle>
            </DetailBox>
            {
                alertbox === true
                ? (
                    <div className="my-alert-yellow">
                        <p>재고가 얼마 남지 않았습니다</p>
                    </div>
                    )
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (productDetailFound.id + 1) + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ productDetailFound.title }</h4>
                    <p>{ productDetailFound.content }</p>
                    <p>{ productDetailFound.price }</p>

                    <StockInfo stock={props.stock} productid={productDetailFound.id}></StockInfo>

                    <button className="btn btn-danger" onClick={()=>{
                        let newArray = [...props.stock];
                        newArray[productDetailFound.id] -= 1;
                        props.updateStock(newArray);
                    }}>Order</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();
                    }}>GoBack</button> 
                </div>
            </div>
        </div> 
    )
}

function StockInfo(props) {
    return (
        <p>stock: { props.stock[props.productid] }</p>
    )
}


export default Detail;