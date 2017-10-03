import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import Card from '../Card'

const ulStyle = {
  listStyle: 'none',
  margin: '0 10px 10px 10px',
  padding: '0'
}

const hrStyle = {
  borderColor: '#000'
}

const colColor = {0: '#F9E79F', 1: '#82E0AA', 2: '#85C1E9'}

class Board extends Component {

  render() {
    const colStyle = {
      padding: '10px',
      textAlign: 'center',
      height: '100%',
      backgroundColor: colColor[this.props.id]
    };
    const listCards = this.props.cards.map(card =>
      <Card key={card.id.toString()}
        boardId={card.boardId}
        id={card.id}
        title={card.title}
        timestamp={card.timestamp}
        moveCard={this.props.moveCard}
        deleteCard={this.props.deleteCard}
      />
    );
    let titleInput = null;
    return (
      <Col xs={4} style={colStyle}>
        <h1>{this.props.name}</h1>
        <hr style={hrStyle}/>
        <ul style={ulStyle}>
          {listCards}
        </ul>
        <label>
          Card Title:
          <input type="text" ref={(input) => titleInput = input} />
          <button onClick={() => this.props.createCard(this.props.id, titleInput)}>
            Create Card
          </button>
        </label>
      </Col>
    );
  }
}

Board.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  moveCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired
}

export default Board;
