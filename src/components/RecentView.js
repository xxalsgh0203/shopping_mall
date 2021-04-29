import React from 'react';
import ShoesinStock from './ShoesinStock.js'

function RecentView(props){
    let vieweditem = localStorage.getItem('viewed');
    vieweditem = JSON.parse(vieweditem);
    return (
        <div>
            <div className="my-alert-yellow">
                <p>Recent viewed items</p>
            </div>

            <div className="container"> {/*좌우 여백을 예쁘게 잡아줌 (Bootstrap 문법)*/}
                <div className="row"> {/*사이트를 열두개의 column 으로 쪼개겠습니다 */}
                {
                    vieweditem.map(function(shoe, i){
                        let productDetailFound = props.shoes.find(function(product){
                            return product.id==shoe
                        });

                        return (
                            <ShoesinStock shoes={ productDetailFound } i={i} key={i}/>
                        )  
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default RecentView;