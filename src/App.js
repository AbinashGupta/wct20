import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout/Layout'
import WNavbar from './container/WNavbar/WNavbar'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <WNavbar />
        </Layout>
      </div>
    );
  }
}

export default App;
