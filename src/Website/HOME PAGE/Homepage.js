import React, { Component } from 'react'
import {Form, FormControl, Nav, Navbar, NavbarBrand, Button, NavDropdown, Container, Carousel, Accordion, Card, Row, Col, Badge} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Homepage.css'
import Email from './Email';
import Phone from './PhoneNumber'
import soda from '../IMAGES/CAROUSEL/soda.jpg'
import pizza from '../IMAGES/CAROUSEL/pizza.jpg'
import shoe from '../IMAGES/CAROUSEL/shoe.jpg'
import ps5 from '../IMAGES/CAROUSEL/ps5.jpg'
import phone from '../IMAGES/CAROUSEL/phone.jpg'


class Homepage extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" style={{fontSize:13}}>
          <NavbarBrand>Welcome</NavbarBrand>
            <Nav className="ml-2 mr-auto">
              <Nav.Link className="ml-1 active"><Link to="/" style={{textDecoration:"none"}} className="nav-link">Home Page</Link></Nav.Link>
              <Nav.Link className="ml-2"><Link to="/Products" style={{textDecoration:"none"}} className="nav-link">Products</Link></Nav.Link>
              <Nav.Link className="ml-2"><Link to="/Your-Cart" style={{textDecoration:"none"}} className="nav-link">Cart <Badge variant="light">{this.props.status.existOfItems}</Badge></Link></Nav.Link>
              <NavDropdown title="Contact Us" className="nav-link">
                  <Phone/>
                  <Email/>
              </NavDropdown>
              <Nav.Link className="ml-2"><Link to="/Sign-In" style={{textDecoration:"none"}} className="nav-link">Sign In</Link></Nav.Link>
            </Nav>
              <Form inline>
                  <FormControl type="text" placeholder="Serach..." style={{fontSize:11}}/>
                  <Button variant="outline-info" style={{fontSize:11}}>Search</Button>
              </Form>
          </Navbar>

        <Container>
          <Link to="/Products"><div className="rounded-pill py-4 my-3 bg-warning" style={{cursor:"pointer",height:"80px",width:"100%",textDecoration:"none",color:"black",textAlign:"center"}}>Click For Our New Products !</div></Link>
        </Container>
          <Container>
            <div className="indicators-change">
              <Carousel style={{display:"block",marginLeft:"auto",marginRight:"auto"}}>
                  <Carousel.Item><img className="my-1 px-2 w-100" src={soda} alt="soda"/><Carousel.Caption><h4>Soda</h4><p>You can buy the best Soda from us!</p></Carousel.Caption></Carousel.Item>
                  <Carousel.Item><img className="my-1 px-2 w-100" src={pizza} alt="pizza"/><Carousel.Caption><h4>Pizza</h4><p>Also you can order fresh and hot Pizza !</p></Carousel.Caption></Carousel.Item>
                  <Carousel.Item><img className="my-1 px-2 w-100" src={shoe} alt="shoe"/><Carousel.Caption><h4>Shoe</h4><p>Do you need Sport Shoes ?<br/>You are at the <b>right place</b></p></Carousel.Caption></Carousel.Item>
                  <Carousel.Item><img className="my-1 px-2 w-100" src={ps5} alt="ps5"/><Carousel.Caption><h4>PS5</h4><p>We love <b>Gamers</b></p></Carousel.Caption></Carousel.Item>
                  <Carousel.Item><img className="my-1 px-2 w-100" src={phone} alt="phone"/><Carousel.Caption><h4>Phone</h4><p>Check out our new brand of phones</p></Carousel.Caption></Carousel.Item>
              </Carousel>
            </div>
          </Container>
            <hr/><hr/>
          <Container>
            <h4 className="my-4">Take A Look At Our Products :</h4>
            <Accordion>
            <Card>
                <Card.Header className="bg-dark">
                  <Accordion.Toggle as={Button} variant="button" eventKey="2"><Button variant="danger">Sport Stuffs</Button></Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="bg-light">
                    Basketball Ball<br/>Hockey Clothes<br/>Football Ball<br/>Soccer Shoe<br/>Tennis Rocket<br/>Soccer Ball<br/><br/><b>More...</b><br/><hr/><Link to="/sport"><Button variant="danger">Buy</Button></Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="bg-dark">
                  <Accordion.Toggle as={Button} variant="button" eventKey="4"><Button variant="danger">Mobiles</Button></Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="bg-light">
                    iPhone X<br/>Samsung A50<br/>Galaxy S5<br/>iPhone 8<br/>Moto G4<br/><br/><b>More...</b><br/><hr/><Link to="/mobile"><Button variant="danger">Buy</Button></Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="bg-dark">
                  <Accordion.Toggle as={Button} variant="button" eventKey="0"><Button variant="danger">Clothes</Button></Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="bg-light">
                    Hat<br/>Shoe<br/>Glasses<br/>Pants<br/>Shirt<br/>T-Shirt<br/><br/><b>More...</b><hr/><Link to="/clothes"><Button variant="danger">Buy</Button></Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="bg-dark">
                  <Accordion.Toggle as={Button} variant="button" eventKey="3"><Button variant="danger">Games</Button></Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="bg-light">
                    PS5<br/>X-Box ONE<br/>PS4<br/>Nintendo<br/>Different Games<br/><br/><b>More...</b><br/><hr/><Link to="/game"><Button variant="danger">Buy</Button></Link>  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="bg-dark">
                  <Accordion.Toggle as={Button} variant="button" eventKey="1"><Button variant="danger">Foods</Button></Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="bg-light">
                    Pizza<br/>Soda<br/>HotDog<br/>Pepperoni<br/>Italian Food<br/>Spanish Food<br/><br/><b>More...</b><br/><hr/><Link to="/food"><Button variant="danger">Buy</Button>
</Link>                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
          <hr/><hr/>
          <Container className="my-4">
            <Row style={{height:"200px"}} className="bg-secondary rounded py-3">
              <Col xs={4}>
                <label for="discount">Enetr Your Email For More Discounts:</label>
                <Form inline>
                <input type="text" className="form-control" id="discount" placeholder="Email"/>
                <Button variant="outline-danger">Submit</Button>
                </Form><br/><br/><br/>
                <b className="rounded bg-light px-2">Thank You For Your Trust</b>
              </Col>
              <Col xs={8}>
                Hi <br/><br/> This is a my website which i made for more experiance.<br/>I have used <b>React js</b> , <b>React Router</b> , <b>React Bootstrap</b> and <b>Redux</b>.<br/><br/>I hope you like it. 
              </Col>
            </Row>
          </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state =>{
  const status = state
  return {status}
}

export default connect(mapStateToProps)(Homepage)
