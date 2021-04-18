import React, {useState} from 'react';

function ShoesinStock(props) {
    return (
      <div className="col-md-4">{/*12개 중 4개의 column 을 사용 (3등분) + 모바일에서 세로정렬 */}
        <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="100%"/>
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content }</p>
        <p>{ props.shoes.price }</p>
      </div>
    )
}

export default ShoesinStock;