import React, { Component } from 'react'
import {Form, FormControl, Nav, Navbar, NavbarBrand, Button, NavDropdown, Container, Badge, ButtonGroup} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Email from '../../HOME PAGE/Email';
import Phone from '../../HOME PAGE/PhoneNumber' 
import { connect } from 'react-redux'
import Stuff from '../../STUFFS/Stuff'
import * as act from '../../REDUX/action'


class Game extends Component {
    render(){
        const cheap = () =>{
            const a = this.props.status.game
            a.sort((x,y)=>x.price>y.price?1:-1)
            this.forceUpdate()
        }
        const expensive = () =>{
            const a = this.props.status.game
            a.sort((x,y)=>x.price>y.price?-1:1)
            this.forceUpdate()
        }    
        const add = (a) =>{
            const ThisID = this.props.status.game.map(function(e){return e.name}).indexOf(a.name)
            this.props.dispatch({type:act.ADD, kind:"game", product:ThisID})
            if(a.amount>=0){
                this.props.dispatch({type:act.DOEXIST,CartID:a.CartID,name:a.name,amount:a.amount,price:a.price,img:a.img,id:ThisID,kind:"game"})
                document.getElementsByClassName('remove')[ThisID].disabled = false
            }
            else{
                document.getElementsByClassName('remove')[ThisID].disabled = true  
            }
            if(a.amount===0) this.props.dispatch({type:act.SETEXIST})        
        }
        const remove = (a) =>{
            const ThisID = this.props.status.game.map(function(e){return e.name}).indexOf(a.name)
            if(a.amount>1){
                this.props.dispatch({type:act.REM, kind:"game", product:ThisID})
                this.props.dispatch({type:act.REMCART, product:a.CartID})
            }
            else if(a.amount === 1){
                this.props.dispatch({type:act.NOEXIST, CartID:a.CartID})
                this.props.dispatch({type:act.REM, kind:"game", product:ThisID})
                document.getElementsByClassName('remove')[ThisID].disabled = true  
                this.props.dispatch({type:act.UNSET})
        }}
        return(
            <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{fontSize:13}}>
                    <NavbarBrand>Welcome</NavbarBrand>
                    <Nav className="ml-2 mr-auto">
                        <Nav.Link className="ml-1"><Link to="/" style={{textDecoration:"none"}} className="nav-link">Home Page</Link></Nav.Link>
                        <Nav.Link className="ml-2"><Link to="/Products" style={{textDecoration:"none"}} className="nav-link">Products</Link></Nav.Link>
                        <Nav.Link className="ml-2"><Link style={{textDecoration:"none"}} className="nav-link active">Games</Link></Nav.Link>
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
                    <h2 className="my-4">Games :</h2>
                    <ButtonGroup>
                        <Button variant="primary" onClick={()=>cheap()} className="my-4">Down to Up</Button>
                        <Button variant="primary" onClick={()=>expensive()} className="my-4">Up to Down</Button>
                    </ButtonGroup>
                    {this.props.status.game.map((a,index)=><Stuff key={index} name={a.name} amount={a.amount} price={a.price} img={a.img} add={()=>add(a)} remove={()=>remove(a)}/>)}
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    const status = state
    return {status}
}

export default connect(mapStateToProps)(Game)