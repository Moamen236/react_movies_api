import React, { Component } from 'react';

class Tv extends Component {
    state = {  }
    render() { 
        let {trendingTv} = this.props
        return ( 
            <>
                <div className="row my-5">
                    {trendingTv.map( (tv) =>
                        <div key={Tv.id} className="col-md-2">
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
 
export default Tv;