/*jshint esversion: 6 */

import React from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
const axios = require('axios');


export default class Catalogue extends React.Component {

  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = {
      category: 'https://picsum.photos/2000/1000/',
    };
  }

  updateData(link) {
    this.setState({ category: link });
    axios.get(this.state.category)
      .then(response => {
        console.log('image');
      });
  }

  render() {
    const list = [];
    for (let idx = 0; idx < 15; idx++)
    {list.push(
      <Card key={idx}>
        <Card.Img variant="top" src={ this.state.category } />
        <Card.Body>
          <Card.Title>Прицеп автомобильный самосвальный</Card.Title>
          <Card.Text>
            Предназначен для перевозки штучных и сыпучих грузов как по дорогам с твердым покрытием, так и по грунтовым
          </Card.Text>
          <Button variant="light" block>Подробнее</Button>
        </Card.Body>
      </Card>
      );
    }

    return (
      <div>
        <Sidebar updateData={ this.updateData }/>
        <div className='Catalogue'>
          <CardColumns>
            { list }
          </CardColumns>
        </div>
      </div>
    );
  }
}
