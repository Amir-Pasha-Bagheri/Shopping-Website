import React, { Component } from 'react'
import {Form, FormControl, Nav, Navbar, NavbarBrand, Button, NavDropdown, Container, Badge} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Email from '../HOME PAGE/Email';
import Phone from '../HOME PAGE/PhoneNumber' 
import { connect } from 'react-redux'
import Stuff from '../STUFFS/Stuff'
import * as act from '../REDUX/action'


class Sport extends Component {
    render(){
        const add = (a) =>{
            this.props.dispatch({type:act.ADD, kind:"sport", product:a.id})
            this.props.dispatch({type:act.DOEXIST,CartID:a.CartID,name:a.name,amount:a.amount,price:a.price,img:a.img,id:a.id,kind:"sport"})
            document.getElementsByClassName('add')[a.id].classList.remove('btn-danger')
            document.getElementsByClassName('add')[a.id].classList.add('btn-success') 
            document.getElementsByClassName('remove')[a.id].classList.remove('disabled')
            document.getElementsByClassName('remove')[a.id].disabled = false
            //this.props.dispatch({type:act.COAST, CartID:a.CartID})
            if(a.amount===0) this.props.dispatch({type:act.SETEXIST})        
        }
        const remove = (a) =>{
        if(a.amount>1){
            this.props.dispatch({type:act.REM, kind:"sport", product:a.id})
            this.props.dispatch({type:act.REMCART, product:a.CartID})
            //this.props.dispatch({type:act.CLESS, CartID:a.CartID})
        }
        else if(a.amount === 1){
            //this.props.dispatch({type:act.CLESS, CartID:a.CartID})
            this.props.dispatch({type:act.NOEXIST, CartID:a.CartID})
            this.props.dispatch({type:act.REM, kind:"sport", product:a.id})
            document.getElementsByClassName('add')[a.id].classList.remove('btn-success')  
            document.getElementsByClassName('add')[a.id].classList.add('btn-danger')
            document.getElementsByClassName('remove')[a.id].disabled = true  
            this.props.dispatch({type:act.UNSET})
        }}
        return(
            <React.Fragment id="sport-item">
                <Navbar bg="dark" variant="dark" style={{fontSize:13}}>
                    <NavbarBrand>Welcome</NavbarBrand>
                    <Nav className="ml-2 mr-auto">
                        <Nav.Link className="ml-1"><Link to="/" style={{textDecoration:"none"}} className="nav-link">Home Page</Link></Nav.Link>
                        <Nav.Link className="ml-2"><Link to="/Products" style={{textDecoration:"none"}} className="nav-link">Products</Link></Nav.Link>
                        <Nav.Link className="ml-2"><Link style={{textDecoration:"none"}} className="nav-link active">Sport Stuffs</Link></Nav.Link>
                        <Nav.Link className="ml-2"><Link to="/Your-Cart" style={{textDecoration:"none"}} className="nav-link">Cart <Badge variant="light">{this.props.status.existOfItems}</Badge></Link></Nav.Link>
                        <NavDropdown title="Contact Us" className="nav-link">
                            <Phone/>
                            <Email/>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Serach..." style={{fontSize:11}}/>
                        <Button variant="outline-info" style={{fontSize:11}}>Search</Button>
                    </Form>
                </Navbar>
                <Container>
                    <h2 className="my-4">Sport Stuffs :</h2>
                    {this.props.status.sport.map((a,index)=><Stuff key={index} name={a.name} amount={a.amount} price={a.price} cart={this.props.status.existOfItems} img={a.img} add={()=>add(a)} remove={()=>remove(a)}/>)}
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    const status = state
    return {status}
}

export default connect(mapStateToProps)(Sport)