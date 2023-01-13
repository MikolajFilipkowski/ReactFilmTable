import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    const { _id, title, genre, numberInStock, dailyRentalRate } = this.props.info

    return (
        <tr>
            <td>{title}</td>
            <td>{genre.name}</td>
            <td>{numberInStock}</td>
            <td>{dailyRentalRate}</td>
            <td><button onClick={() => {this.props.deleteHandler(_id)}}>Delete</button></td>
        </tr>
    )
  }
}
