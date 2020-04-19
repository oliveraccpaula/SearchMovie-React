import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = '2985500e'

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string
  }

  state = { movie: {} }

  _fetchMovie ({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(res => res.json())
    .then(movie => {
      console.log({ movie })
      this.setState({ movie })
    })
  }

  componentDidMount () {
    const { id } = this.props
    this._fetchMovie({ id })
  }

  render () {
    
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div className="page">
        <h1>{Title}</h1> 
        <img src={Poster} className="poster"/>
        <h3>{Actors}</h3>
        <p className="plot">{Plot}</p>
      </div>
    )
  }
  
}
/*
export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string

import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = '2985500e'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }
 // http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}
  state = { movie: {} }

  _fetchMovie ({ id }) {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({ movie })
        this.setState({ movie })
      })
  }

  componentDidMount () {
    console.log(this.props)
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }

  render () {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

    return (
      <div>
        <ButtonBackToHome/>
        <h1>{Title}</h1>
        <img src={Poster} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}
*/

/*
export class Detail extends Component {
  render () {
    return (
      <p>Pagina de detalleeeeeeeeeeeeeee</p>
    )
  }
}

*/