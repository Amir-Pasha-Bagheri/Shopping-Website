import React, { Component } from "react";
import {connect} from 'react-redux'
import {Navbar, Nav, Button, Form, Badge, FormControl, NavDropdown, NavbarBrand, Container, Card, ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Email from '../HOME PAGE/Email';
import Phone from '../HOME PAGE/PhoneNumber' 
import * as act from '../REDUX/action'

class Cart extends Component {
    componentDidMount(){
        if(this.props.status.existOfItems === 0) document.getElementById('submit').disabled = true
        else {document.getElementById('submit').disabled = false}
    }
    componentDidUpdate(){
        if(this.props.status.existOfItems === 0) document.getElementById('submit').disabled = true
        else {document.getElementById('submit').disabled = false}
    }
    render(){
        const add = (a) =>{
            this.props.dispatch({type:act.ADD, kind:a.kind, product:a.id})
            this.props.dispatch({type:act.ADDCART, product:a.CartID})     
        }
        const less = (a) =>{
            if(a.amount>1){
                this.props.dispatch({type:act.REM, kind:a.kind, product:a.id})
                this.props.dispatch({type:act.REMCART, product:a.CartID})
            }
            else if(a.amount === 1){
                this.props.dispatch({type:act.UNSET}) 
                this.props.dispatch({type:act.REM, kind:a.kind, product:a.id})
                this.props.dispatch({type:act.REMCART, product:a.CartID}) 
                this.props.dispatch({type:act.NOEXIST, CartID:a.CartID})
            }
        }
        const remove = (a) =>{
            this.props.dispatch({type:act.UNSET})
            this.props.dispatch({type:act.NOEXIST, CartID:a.CartID})
        }
        const submit = (a) =>{
            var allLength = this.props.status.clothes.length + this.props.status.food.length + this.props.status.game.length +this.props.status.mobile.length +this.props.status.sport.length
            for(var i = 0;i<=allLength;i++){
                if(a[i]!==undefined) this.props.dispatch({type:act.COAST,CartID:i})
            }
        }
        return(
            <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{fontSize:13}}>
                    <NavbarBrand>Welcome</NavbarBrand>
                    <Nav className="ml-2 mr-auto">
                        <Nav.Link className="ml-1"><Link to="/" style={{textDecoration:"none"}} className="nav-link">Home Page</Link></Nav.Link>
                        <Nav.Link className="ml-2"><Link to="/Products" style={{textDecoration:"none"}} className="nav-link">Products</Link></Nav.Link>
                        <Nav.Link className="ml-2 active"><Link to="/Your-Cart" style={{textDecoration:"none"}} className="nav-link">Cart <Badge variant="light">{this.props.status.existOfItems}</Badge></Link></Nav.Link>
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
                    <h2>Your Cart :</h2>
                    <Container>
                        <Link to='/Payment' style={{textDecoration:"none"}}><Button variant="success" id="submit" className="mt-4 mb-3 w-75 mx-auto d-block" onClick={()=>submit(this.props.status.arrayOfItems)}>Submit</Button></Link>
                    </Container>
                        <ul style={{listStyleType:'none'}} className="my-5">
                        {this.props.status.arrayOfItems.map((e,index)=><li key={index}>
                        {e!==undefined?<Card className="w-25 float-left mx-2" style={{height:"500px"}}>
                            <Card.Body>
                            <Card.Img src={e.img}/>
                                <p>{e.name}</p>
                                <p>{e.price}$</p>
                                <hr/>
                                {e.amount!==0 ? <p>You have ordered {e.amount} {e.name}!</p>:false}
                                <ButtonGroup className="my-1 mx-3">
                                    <Button className="btn-danger add" style={{fontSize:'13px',transition:'0.3s'}} onClick={()=>add(e)}>Add More</Button>
                                    <Button className="btn-danger remove disabled" style={{fontSize:'13px',transition:'0.3s'}} onClick={()=>less(e)}>Less</Button>
                                </ButtonGroup>
                                <Button className="btn-secondary ml-3" onClick={()=>{remove(e)}}>Remove</Button>
                            </Card.Body>
                        </Card>:undefined}</li>)}
                        </ul>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    const status = state
    return {status}
} 

export default connect(mapStateToProps)(Cart)