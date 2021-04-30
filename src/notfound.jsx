import React, { Component } from 'react';

class Notfound extends Component {
    state = {  }
    render() { 
        return (  
            <div className="row justify-content-center align-items-center vh-100 text-dark text-center">
                <div className="jumbotron">
                    <h1 className="display-4">404</h1>
                    <p className="lead">Page not found.</p>
                    <p>It uses utility classNamees for typography and spacing to space content.</p>
                </div>
            </div>
        );
    }
}
 
export default Notfound;