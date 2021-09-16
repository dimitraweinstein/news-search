import React, { Component } from 'react';
import ArticleList from '../articles/ArticleList';


export default class NewsSearchContainer extends Component {
  state = {
    loading: true,
    articles: [],
  }

  async componenetDidMount() {
    const articles = await //fetchArticles();
    this.setState({ articles, loading: false });
  }
  
  render() {

    const { loading, articles } = this.state;
    
    if(loading) return <p>Loading...</p>;

    return <ArticleList articles={articles} />;
  }
}
