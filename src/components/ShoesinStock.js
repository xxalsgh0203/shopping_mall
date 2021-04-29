import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function ShoesinStock(props) {
  let history = useHistory();
    return (
      <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.shoes.id)}}>{/*12개 중 4개의 column 을 사용 (3등분) + 모바일에서 세로정렬 */}
        <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) + '.jpg' } width="100%"/>
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content }</p>
        <p>{ props.shoes.price }</p>
      </div>
    )
}

export default ShoesinStock;