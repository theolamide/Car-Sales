import React from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {addFeature} from './reducer/actions';
import {removeFeature} from './reducer/actions';

const App = (props) => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}  additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state)
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps, {addFeature,removeFeature}) (App);
