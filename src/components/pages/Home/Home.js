import { Component } from "../../../core";
import { storageService } from "../../../services/Storage";
import { Database } from "../../../services/DataBase";
import { MovieCard } from "../../organisms";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
    this.movies = [];
  }


  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }


  getMovies = (data) => {

}


componentDidMount() {
  this.getMovies();
}

render() {
  return `
        <div>
            ${this.movies.map((item) => {
    return `
              <movie-card>
                  id="${this.movies.id}"
                  title="${this.movies.title}"
                  poster="${this.movies.poster}"
                  descriptions="${this.movies.descriptions}"
                  rating"${this.movies.rating}"
              </movie-card>`
  })}
        </div>
    `
}
}

customElements.define('home-page', HomePage)