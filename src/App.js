import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import ChooseLanguage from './components/ChooseLanguage/ChooseLanguage';
import Blog from './components/Blog/Blog';

function App(props) {
  return (
    <BrowserRouter>

      {props.lan? <Blog/> :  <ChooseLanguage />}
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    lan: state.baseInfo.language,
  }
};

export default connect(mapStateToProps, null)(App);
