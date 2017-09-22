import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component{
  render(){
    return (
      <div className="home">
        <header>Home Header</header>
        <ul>
          <li>
            <Link to="/bins/A">
              <button>Shelf A</button>
            </Link>
          </li>
          <li>
            <Link to="/bins/B">
              <button>Shelf B</button>
            </Link>
          </li>
          <li>
            <Link to="/bins/C">
              <button>Shelf C</button>
            </Link>
          </li>
          <li>
            <Link to="/bins/D">
              <button>Shelf D</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
};
