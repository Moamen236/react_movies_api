import React, { Component } from 'react';
import Movise from './Movise';

class Home extends Component {
    state = {  }
    render() { 
        let {trendingMovies , trendingTv} = this.props
        console.log(this.props)
        return ( 
            <>
            <div className="row justify-content-center align-items-center my-5">
                <div className="col-md-4">
                    <div className="line w-25"></div>
                    <div className="head-txt">
                        <h2>Trinding <br/>Movise<br/>to watch now</h2>
                        <p>Most watched movies by days</p>
                        <div className="line w-100"></div>
                    </div>

                </div>
                {trendingMovies.slice(0,10).map( (movie) =>
                    <div key={movie.id} className="col-md-2">
                        <div className="movie">
                            <img src={ "https://image.tmdb.org/t/p/w500/"+movie.poster_path } alt="" className="img-fluid"/>
                            <h4 className="h6 my-3">{movie.title} {movie.name}</h4>
                            <span className="vote">{movie.vote_average}</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="row justify-content-center align-items-center my-5">
                <div className="col-md-4">
                    <div className="line w-25"></div>
                    <div className="head-txt">
                        <h2>Trinding <br/>Tv<br/>to watch now</h2>
                        <p>Most watched tv by days</p>
                        <div className="line w-100"></div>
                    </div>

                </div>
                {trendingTv.slice(0,10).map( (tv) =>
                    <div key={tv.id} className="col-md-2">
                        <div className="movie">
                            <img src={ "https://image.tmdb.org/t/p/w500/"+tv.poster_path } alt="" className="img-fluid"/>
                            <h4 className="h6 my-3">{tv.title} {tv.name}</h4>
                            <span className="vote">{tv.vote_average}</span>
                        </div>
                    </div>
                )}
            </div>
            </>

            
        );
    }
}
 
export default Home;