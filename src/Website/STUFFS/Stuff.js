import React,{ Component } from 'react'
import { Button, ButtonGroup, Card, Container} from 'react-bootstrap';

class Stuff extends Component{
    render(){
        return(
            <Container>
                <Card className="w-25 float-left mx-2" style={{height:"500px"}}>
                    <Card.Body>
                    <Card.Img src={this.props.img}/>
                        <p>{this.props.name}</p>
                        <p>{this.props.price}$</p>
                        <hr/>
                        <ButtonGroup className="my-1 mx-3">
                            <Button className="btn-danger add" style={{fontSize:'13px',transition:'0.3s'}} onClick={this.props.add}>Add To Cart</Button>
                            <Button className="btn-danger remove disabled" style={{fontSize:'13px',transition:'0.3s'}} onClick={this.props.remove}>Remove From Cart</Button>
                        </ButtonGroup>
                        {this.props.amount!==0 ? <p className="ml-2 mt-2 text-success">You have ordered {this.props.amount} {this.props.name}!</p>:false}
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Stuff