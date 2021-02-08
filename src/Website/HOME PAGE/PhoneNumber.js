import React from 'react'
import {Modal, NavDropdown} from 'react-bootstrap'
import telegram from '../IMAGES/CONTACT US/telegram.png'
import whatsapp from '../IMAGES/CONTACT US/whatsapp.jpg'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"  style={{fontSize:14}} >
            Phone Number
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{fontSize:14}} >
          <p>
          <img src={telegram} alt="Telegram" width="20px" height="20px"/> +98 937 345 2374<br/><br/><img src={whatsapp} alt="Whatsapp" width="19px" height="19px"/> +98 937 345 2374<br/><br/>You can text me in Whatsapp or Telegram.<br/> 24 Hours available :)
          </p>
        </Modal.Body>
      </Modal>
    );
  }
  
  function Phone() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <NavDropdown.Item variant="primary"  style={{fontSize:10}}  onClick={() => setModalShow(true)}>
          Phone Number
        </NavDropdown.Item>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default Phone