import React from "react";
import { Modal, Card, Button } from 'react-bootstrap'
import ModalView from './ModalView'

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
      countries: [],
      showModal: false
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(result => {
        this.setState({
          countries: result
        });
      });
  }



  render() {
    const { countries } = this.state;
    const closeModal = () => this.setState({showModal: false}) 

    return (
      <div style={{display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'space-evenly'}}>
        {countries.map(item => (
          <Card style={{ width: "10rem", 'margin-top': '3rem' }} key={item.name}>
            <Card.Img variant="top" src={item.flag} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Button variant="primary" onClick={() => this.setState({showModal: true, country: item})}>Add to cart</Button>
            </Card.Body>
          </Card>
        ))}
        <ModalView
          show={this.state.showModal} 
          onHide={closeModal} 
          country={this.state.country}
        />
        </div>
    );
  }
  
}
