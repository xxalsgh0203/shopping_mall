import React from 'react'
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux'

function Cart(props){
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
                    props.state.map(function(product){
                        return (
                            <tr>
                                <td>1</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.id}</td>
                            </tr>
                        )
                    })
                }

            </Table>
        </div>
    )
}

function statetoProps(state){
    return {
        state : state
    }
}

export default connect(statetoProps)(Cart)