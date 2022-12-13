import { Component } from "../../../core";
import "./movieCard.scss";

export class MovieCard extends Component {
  static get observedAttributes() {
    return ["title", "poster", "descriptions", "id", "rating"];
  }

  render() {
    return `
        <div class="movie">
            <div class="movie-image">
              <span class="play"><span class="name">${this.props.title}</span></span>
              <a href="#"><img src="../../assets/images/${this.props.poster}" alt="${this.props.title}"/></a>
            </div>
            <div class="rating">
              <p>RATING</p>
              <div class="stars">
                  <div class="stars-in"></div>
            </div>
        </div>
        `;
  }
}

customElements.define("movie-card", MovieCard);
