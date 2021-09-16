import React, { Component } from 'react';

export default class NewsSearchContainer extends Component {
  state = {
    loading: true,
    articles: [],
  }
  render() {

    const { loading } = this.state;
    
    if(loading) return <p>Loading...</p>;
  }
}
