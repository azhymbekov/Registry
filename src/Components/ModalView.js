import React from 'react';
import { Modal, Button } from 'react-bootstrap';


export default class ModalView extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {this.props.country.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={this.props.country.flag} style={{width: '500px'}}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }
}