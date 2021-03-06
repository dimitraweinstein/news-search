import React, { Component } from 'react';
import { fetchArticlesByUserQuery } from '../services/newsArticleApi';
import SearchControls from '../components/articles/SearchControls';
import ArticleList from '../components/articles/ArticleList';


export default class NewsSearchContainer extends Component {
  state = {
    loading: true,
    userQuery: '',
    articles: [],
  }

  handleUserQueryChange = (event) => {
    this.setState({ userQuery: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchArticlesByUserQuery(this.state.userQuery);
    this.setState({ articles, loading: false });
  }
  
  render() {
    const { loading, userQuery, articles } = this.state;
    return (
      <>
        <SearchControls
          userQuery={userQuery}
          onQueryChange={this.handleUserQueryChange}
          onSubmit={this.handleSubmit}
        />
      
        {
          loading ? (<img
            // eslint-disable-next-line max-len
            src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
            alt="loading spinner" />) : (
            <>
              <ArticleList
                articles={articles}
              />
            </>)
        }
      </>
    );
  }
}
    
  
  



