import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <article>
    <h3>
      {title}
    </h3>
    <h4>
      {author}
    </h4>
    <p>
      {description}
    </p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
