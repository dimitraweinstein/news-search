import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map((article) => (
      <li key={`${article.title}`} >
        <Article
          title={article.title}
          author={article.author || 'N/A'} 
          description={article.description}
        />
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default ArticleList;
