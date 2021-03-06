import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import ChooseLanguage from './components/ChooseLanguage/ChooseLanguage';
import Structure from './components/Structure/Structure';

function App(props) {
  return (
    <BrowserRouter>
      <Structure/>
      {/* {props.lan? <Blog/> :  <ChooseLanguage />} */}
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    lan: state.baseInfo.language,
  }
};

export default connect(mapStateToProps, null)(App);
