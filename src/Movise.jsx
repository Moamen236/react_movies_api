import React, { Component } from 'react';

class Movise extends Component {
    state = {  }
    render() { 
        let {trendingMovies} = this.props

        return ( 
        <>
            <div className="row my-5">
                {trendingMovies.map( (movie) =>
                    <div key={Movise.id} className="col-md-2">
                        <div className="movie">
                            <img src={ "https://image.tmdb.org/t/p/w500/"+movie.poster_path } alt="" className="img-fluid"/>
                            <h4 className="h6 my-3">{movie.title} {movie.name}</h4>
                            <span className="vote">{movie.vote_average}</span>
                        </div>
                    </div>
                )}
            </div>
        </>);
    }
}
 
export default Movise;