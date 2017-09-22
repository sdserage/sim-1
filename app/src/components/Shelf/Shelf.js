import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './Shelf.css';
import logo from '../../images/logo.png';
import axios from 'axios';

export default class Shelf extends Component{
  constructor(){
    super();
    this.state = {
      bins: [true, true, true, false, true],
      shelf: ""
    };
    this.setBinClassName = this.setBinClassName.bind(this);
  }

  componentWillMount(){
    this.setState({
      shelf: this.props.match.params.shelf
    })
    axios.get('/api/bins/${this.state.shelf}')
      .then(response => {
        let newBinVals = response.data.map(bin => {
          return bin.name ? true : false;
        });
        this.setState({
          bins: newBinVals
        });
      })
      .catch(error => {console.log(error);});
  }

  setBinClassName(index){
    return this.state.bins[index]?"bin-button-full":"bin-button-empty";
  }

  render(){
    //let shelf = this.props.match.params.shelf;
    return (
      <div className="home">
        <header>
          <Link to="/">
            <div className='home-header'>
              <img className='logo' src={logo} alt="shelfie logo"/>
            </div>
          </Link>
          <div className='shelf-header'>
            Shelf {this.state.shelf}
          </div>
        </header>
        <ul>
          <li>
            <Link to={`/bins/${this.state.shelf}/1`}>
              <button className={this.setBinClassName(0)}>Bin 1</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${this.state.shelf}/2`}>
              <button className={this.setBinClassName(1)}>Bin 2</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${this.state.shelf}/3`}>
              <button className={this.setBinClassName(2)}>Bin 3</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${this.state.shelf}/4`}>
              <button className={this.setBinClassName(3)}>Bin 4</button>
            </Link>
          </li>
          <li>
            <Link to={`/bins/${this.state.shelf}/5`}>
              <button className={this.setBinClassName(4)}>Bin 5</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
};
