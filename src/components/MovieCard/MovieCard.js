import { Component } from "../../core";
import { MovieService } from "../../services/MovieService";
import { MOVIES } from "../../MOCK/movies";
import './movieCard.scss'

export class MovieCard extends Component {
    constructor() {
        super();
    }

    static get observedAttribute() {
        return ['title', 'poster', 'comments']
    }

    componentDidMount() {

    }

    render() {
        return `
        <div class="movie">
        <div class="movie-image"> <span class="play"><span class="name">${this.props.title}</span></span> <a href="#"><img src="../../assets/images/movie1.jpg" alt="" />${this.props.poster}</a> </div>
        <div class="rating">
          <p>RATING</p>
          <div class="stars">
            <div class="stars-in"> </div>
          </div>
          <span class="comments">${this.props.comments?.length ?? 0}</span> </div>
      </div>
        `
    }
}

customElements.define('it-movie-card', MovieCard);