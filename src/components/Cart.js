import React from 'react'
import {useState} from 'react';
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux'

function Cart(props){

    let [alertbox, updatealertbox] = useState(true);
    return (
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>정보</th>
                </tr>
                {
                    props.state.map(function(product, i){
                        return (
                            <tr key = {i}>
                                <td>{i+1}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button onClick={()=>{ props.dispatch({type : 'add', id : i})}}>+</button>
                                    <button onClick={()=>{ props.dispatch({type : 'minus', id : i})}}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </Table>

            {
                alertbox == true
                ? <EventAlert updatealertbox={updatealertbox}/>
                : null        
            }

        </div>
    )
}

function statetoProps(state){
    return {
        state : state
    }
}

function EventAlert(props) {
    return (
        <div className="my-alert-yellow">
            <p>Recieve 20% off by ordering within 24 hours</p>
            <button onClick={()=>{props.updatealertbox(false)}}>close</button>
        </div>
    )
}

export default connect(statetoProps)(Cart)