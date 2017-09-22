import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './Shelf.css';

export default class Shelf extends Component{
  render(){
    let shelf = this.props.match.params.shelf;
    return (
      <div className="home">
        <header>Shelf Header</header>
        <ul>
          <li>
            <Link to={`/bins/${shelf}/1`}>
              <button>Bin 1</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${shelf}/2`}>
              <button>Bin 2</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${shelf}/3`}>
              <button>Bin 3</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${shelf}/4`}>
              <button>Bin 4</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${shelf}/5`}>
              <button>Bin 5</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
};
