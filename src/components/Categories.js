import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Categories.css';

class Categories extends Component{
    render(){
        return(
            <div className="col 12 waypoint">
                <div className="row">
                    <ul id="row">
                        <li><Link to="/categories/request/quote">Automotive</Link></li>
                        <li><Link to="/categories/request/quote">Batteries</Link></li>
                        <li><Link to="/categories/request/quote">Construction</Link></li>
                        <li><Link to="/categories/request/quote">Electonics</Link></li>
                        <li><Link to="/categories/request/quote">Furniture</Link></li>
                        <li><Link to="/categories/request/quote">Glass</Link></li>
                        <li><Link to="/categories/request/quote">Garden</Link></li>
                        <li><Link to="/categories/request/quote">Holiday</Link></li>
                        <li><Link to="/categories/request/quote">Metal</Link></li>
                        <li><Link to="/categories/request/quote">Paint</Link></li>
                        <li><Link to="/categories/request/quote">Paper</Link></li>
                        <li><Link to="/categories/request/quote">Plastic</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Categories;