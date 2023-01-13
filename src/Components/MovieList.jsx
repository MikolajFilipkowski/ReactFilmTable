import React, { Component } from 'react';
import {getMovies} from '../fake_movies.js';
import Movie from './Movie'

export default class MovieList extends Component {

    constructor(props){
        super(props)

        this.state = {
            movies: getMovies()
        }

        this.deleteHandler = this.deleteHandler.bind(this) 
    }
    

    deleteHandler(id) {
        console.log(id)
        this.setState({movies: 
            this.state.movies.filter(
            (v) => {console.log(id); return v._id !== id}
        )})
    }

    render() {
        console.log(this.state.movies)
        return (
            <table>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Delete</th>
                </tr>
                {
                this.state.movies.map(element => {
                    return <Movie info={element} key={element._id} deleteHandler={this.deleteHandler}/>
                })
                }
            </table>
        )
    }
}
