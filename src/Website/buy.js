import React, { Component } from "react";
import {connect} from 'react-redux'
import {Button, Container, ButtonGroup, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as act from './REDUX/action'
import BuyItems from './buyItems'

class Buy extends Component {
    render(){
        const back = (a) =>{
            var allLength = this.props.status.clothes.length + this.props.status.food.length + this.props.status.game.length +this.props.status.mobile.length +this.props.status.sport.length
            for(var i = 0;i<=allLength;i++){
                if(a[i]!==undefined) this.props.dispatch({type:act.CLESS,CartID:i})
            }
        }
        return(
            <React.Fragment>
                <Container>
                    <ButtonGroup className="w-100 my-5">
                       <Link style={{textDecoration:"none"}} className="text-white btn btn-secondary" to="/" onClick={()=>back(this.props.status.arrayOfItems)}>Back</Link>
                        <Button variant="secondary" onClick={()=>alert("You Bought It !")} href="/">Next</Button>
                    </ButtonGroup>
                    <Table striped className="">
                        <thead>
                            <tr>
                            <th style={{textAlign:"center"}}>Name</th>
                            <th style={{textAlign:"center"}}>Price</th>
                            <th style={{textAlign:"center"}}>Amount</th>
                            <th style={{textAlign:"center"}}>Finall Price</th>
                            </tr>
                        </thead>
                    </Table>
                    {this.props.status.arrayOfItems.map((e,index)=><BuyItems para={e} key={index}/>)}
                    <h3 className="my-3">Total Coast : {this.props.status.coast} $</h3>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    const status = state
    return {status}
} 

export default connect(mapStateToProps)(Buy)