import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './Shelf.css';
import logo from '../../images/logo.png';

export default class Shelf extends Component{
  render(){
    let shelf = this.props.match.params.shelf;
    return (
      <div className="home">
        <header>
          <Link to="/">
            <div className='home-header'>
              <img className='logo' src={logo} alt="shelfie logo"/>
            </div>
          </Link>
          <div className='shelf-header'>
            Shelf {shelf}
          </div>
        </header>
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
