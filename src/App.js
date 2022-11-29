import { Component } from "./core";
import './components'
import { MovieService } from "./services/MovieService";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchValue: '',
      selectedCategory: ''
    }
  }

  componentDidMount() {
    MovieService.getAllMovies()
    .then(({data}) => {
      this.setState((state) => {
        return {
          ...state,
          movies: data
        }
      })
    })
  }

  render() {
    return `<div id=""shell><it-header></it-header>
              <it-movie-card></it-movie-card></div>
           </div>`
  }
}

customElements.define("my-app", App);
