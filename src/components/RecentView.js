import React from 'react';

function RecentView(props){
    let vieweditem = localStorage.getItem('viewed');
    vieweditem = JSON.parse(vieweditem);

    let productDetailFound = props.shoes.find(function(product){
        return product.id==vieweditem[0];
    });
    return (
        <div>
            <p>{productDetailFound.title}</p>
            <p>{productDetailFound.content}</p>
            <p>{productDetailFound.price}</p>
        </div>
    )


    // vieweditem.map(function(item, i){

    // })
}

export default RecentView;