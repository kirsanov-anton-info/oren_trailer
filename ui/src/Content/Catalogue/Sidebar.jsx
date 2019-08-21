/*jshint esversion: 6 */

import React from 'react';
import { Button } from 'react-bootstrap';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category1: 'http://sarmat56.ru/image/1q2w.jpg',
      category2: 'https://picsum.photos/2200/1000/',
      category3: 'https://picsum.photos/2300/1000/',
      category4: 'https://picsum.photos/2400/1000/',
      category5: 'https://picsum.photos/2500/1000/',
      category6: 'https://picsum.photos/2600/1000/',
      category7: 'https://picsum.photos/2700/1000/',
    };
  }



  render() {
    return (
      <div className='Sidebar'>
        <Button variant="light" onClick={() => { this.props.updateData(this.state.category1)}} block>Тракторные прицепы и полуприцепы</Button>
        <Button variant="light" onClick={() => { this.props.updateData(this.state.category2)}} block>Шасси и машкомплекты прицепов</Button>
        <Button variant="light" onClick={() => { this.props.updateData(this.state.category3)}} block>Сельско-хозяйственная техника</Button>
        <Button variant="light" onClick={() => { this.props.updateData(this.state.category4)}} block>Автомобильные прицепы и полуприцепы</Button>
        <Button variant="light" onClick={() => { this.props.updateData(this.state.category5)}} block>Запчасти</Button>
        <Button variant="light" onClick={() => { this.props.updateData(this.state.category6)}} block>Прочая продукция</Button>
        <Button variant="light" onClick={() => { this.props.updateData(this.state.category7)}} block>Неликвиды</Button>
      </div>
    );
  }
}
