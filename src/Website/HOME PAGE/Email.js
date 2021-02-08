import React from 'react'
import {Modal, NavDropdown} from 'react-bootstrap'
import gmail from '../IMAGES/CONTACT US/gmail.png'

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
            e-mail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{fontSize:14}} >
          <p>
            <img src={gmail} alt="gmail" height="16px" width="21px"/> a.p.bagheri83@gmail.com<br/><br/>You can send me e-mail.<br/>24 Hours available :)
          </p>
        </Modal.Body>
      </Modal>
    );
  }
  
  function Email() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <NavDropdown.Item variant="primary"  style={{fontSize:10}}  onClick={() => setModalShow(true)}>
          e-mail
        </NavDropdown.Item>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default Email