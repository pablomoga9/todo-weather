import React, { Component } from "react";
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      task:this.props.data.task
    }
  }
  render() {
    const {task, accomplishDate} = this.props.data;

    return(
      <article>
        <h2>{this.state.task}</h2>
        <h3>{this.state.accomplishDate}</h3>
        <button onClick={this.props.delete}>Borrar</button>
      </article>
    )
  }
}

export default Card;
