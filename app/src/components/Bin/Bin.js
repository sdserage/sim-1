import React, {Component} from "react";
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import './Bin.css';

export default class Shelf extends Component{
  render(){
    let shelf = this.props.match.params.shelf;
    let binNumber = this.props.match.params.binnumber;
    return (
      <div className="home">
        <header>
          <Link to="/">
            <div className='home-header'>
              <img className='logo' src={logo} alt="shelfie logo"/>
            </div>
          </Link>
          <Link to={`/bins/${shelf}`}>
            <div className='shelf-header'>
              Shelf {shelf}
            </div>
          </Link>
          <div className='bin-header'>
            {/*Will implement a ternary to display 'Add to'*/} {`Bin ${binNumber}`}
          </div>
        </header>
        <p>Name</p>
        <input type='text'/>
        <p>Price</p>
        <input type='text'/>
        <div>
          <button className="default-button">Edit</button>
          <button className="default-button">Delete</button>
          <button className="update-button">+ Add to Inventory</button>
        </div>
      </div>
    );
  };
};
