import React, { Component } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Movise from './Movise';
import Tv from './Tv';
import Notfound from './notfound';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = { 
    movies:[],
    tv:[]
   }

  getTrending = async (mediaType) =>{
    let {data} = await axios.get(`http://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    // console.log(data.results)
    this.setState({[mediaType]:data.results})
  }

  componentDidMount(){
    this.getTrending('movies');
    this.getTrending('tv')

  }

  
  render() { 
    return ( 
      <>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route path="/home" render={ (props)=> <Home {...props} trendingMovies={this.state.movies}  trendingTv={this.state.tv}/> }></Route>
          <Route path="/movise" render={(props)=> <Movise {...props} trendingMovies={this.state.movies}/>} ></Route>
          <Route path="/tv" render={(props)=> <Tv {...props} trendingTv={this.state.tv}/>}></Route>
          <Route path="/notfound" component={Notfound}></Route>
          <Redirect from="/" exact to="/home"></Redirect>
          <Redirect to="/notfound"></Redirect>
          
        </Switch>
      </div>
      </>
    
     );
  }
}
 
export default App;
