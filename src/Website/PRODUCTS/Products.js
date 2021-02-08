import React, { Component } from 'react'
import {Form, FormControl, Nav, Navbar, NavbarBrand, Button, NavDropdown, Container, Card, Badge} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Email from '../HOME PAGE/Email';
import Phone from '../HOME PAGE/PhoneNumber'
import food from '../IMAGES/PRODUCTS/food.jpg'
import game from '../IMAGES/PRODUCTS/games.webp'
import clothes from '../IMAGES/PRODUCTS/clothes.jpg'
import sport from '../IMAGES/PRODUCTS/sport.jpg'
import mobile from '../IMAGES/PRODUCTS/mobile.jpg'

class Products extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{fontSize:13}}>
                    <NavbarBrand>Welcome</NavbarBrand>
                    <Nav className="ml-2 mr-auto">
                        <Nav.Link className="ml-1"><Link to="/" style={{textDecoration:"none"}} className="nav-link">Home Page</Link></Nav.Link>
                        <Nav.Link className="ml-2 active"><Link to="/Products" style={{textDecoration:"none"}} className="nav-link">Products</Link></Nav.Link>
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

                <Container className="my-4">
                    <h2 style={{textAlign:"center",paddingRight:"160px"}}>Choose What You Want !</h2>
                    <Card className="my-3 mx-5 w-75" id="sport">
                        <Card.Header className="alert-primary">Sport Stuffs</Card.Header>
                        <Card.Img variant="top" height="200px" src={sport}/>
                        <Card.Body>Wanna play Soccer? Volleyball? Tennis? Choose what you need!<hr/><Link to="/sport/#sport-item"><Button variant="primary">Buy</Button></Link></Card.Body>
                    </Card>
                    <Card className="my-3 mx-5 w-75" id="mobile">
                        <Card.Header className="alert-success">Mobile</Card.Header>
                        <Card.Img variant="top" height="200px" src={mobile}/>
                        <Card.Body>Your phone is broken? Old? Pick up what you want!<hr/><Link to="/mobile/#mobile-item"><Button variant="success">Buy</Button></Link></Card.Body>
                    </Card>
                    <Card className="my-3 mx-5 w-75" id="clothes">
                        <Card.Header className="alert-warning">Clothes</Card.Header>
                        <Card.Img variant="top" height="200px" src={clothes}/>
                        <Card.Body>We have everything that you want!<hr/><Link to="/clothes/#clothes-item"><Button variant="warning">Buy</Button></Link></Card.Body>
                    </Card>
                    <Card className="my-3 mx-5 w-75" id="games">
                        <Card.Header className="alert-info">Games</Card.Header>
                        <Card.Img variant="top" height="200px" src={game}/>
                        <Card.Body>We love gamers so you can buy every console that you want!<hr/><Link to="/game/#game-item"><Button variant="info">Buy</Button></Link></Card.Body>
                    </Card>
                    <Card className="my-3 mx-5 w-75" id="food">
                        <Card.Header className="alert-danger">Foods</Card.Header>
                        <Card.Img variant="top" height="200px" src={food}/>
                        <Card.Body>You can order fresh food and buy frsh vegtables from us!<hr/><Link to="/food"><Button variant="danger" >Buy</Button></Link></Card.Body>
                    </Card>
                </Container>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state =>{
    const status = state
    return {status}
  }
  
  export default connect(mapStateToProps)(Products)