import { Component, useEffect } from 'react';
import {withRouter} from 'react-router-dom';

import Car from './Car';

import './CarsList.css';



class CarsList extends Component {
  constructor(props) {
    super(props);


    this.goBack = this.goBack.bind(this);    
  }
  


  componentDidMount() {
    if (this.props.cars.length > 0) {
      this.loader = false;
    }else{
      this.loader = true;     
    }
  }

  goBack() {
    this.props.history.goBack();
  }


  render() {
    return (
      <div className="CarsList">

        {this.props.cars.length===0
        ?
        <article className="Cars-NoCarsMessage fade-in"><h2 className="Cars-NoCarsMessage">No cars to show.. <i className="far fa-frown"></i></h2> <p className="Cars-NoCarsMessage-text">Please select different search criteria!</p></article>
        :


        <ul className="CarsList-list">
          <div className="CarsList-list-header">
                <article className="backBtnWrapper">
                        <button className="CarInfo-wrapper-backBtn back-Btn" onClick={this.goBack}>Go back</button>
                </article>
             <span className="sort">Sort by price:  
                    <span className={this.props.greenAsc?"sort-Asc":"sort-deactive"} 
                    onClick={this.props.sortByPriceAsc.bind(this)}>Asc </span> 
                      / 
                    <span className={this.props.greenDesc?"sort-Desc":"sort-deactive"} onClick={this.props.sortByPriceDesc.bind(this)}>  Desc</span></span></div>
          {this.props.cars.map(car => {
            return <Car key={car.id.toString()} car={car} />
          })
          }
        </ul>
        }
      </div >
    );
  };


}

export default withRouter(CarsList);
