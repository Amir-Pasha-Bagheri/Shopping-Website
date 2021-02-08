import { extend } from "immutability-helper";
import React, { Component } from "react";
import {Table} from 'react-bootstrap'

class BuyItems extends Component {
    render(){
        return(
            <Table >
                {this.props.para!==undefined?<tr>
                <td className="w-25">{this.props.para.name}</td>
                <td className="w-25">{this.props.para.price} $</td>
                <td className="w-25">{this.props.para.amount}</td>
                <td className="w-25">{this.props.para.amount * this.props.para.price} $</td></tr>
                :<tr>{false} </tr> } 
            </Table>
        )
    }
}
export default BuyItems