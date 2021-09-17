import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <article>
    <p>
      {title}
    </p>
    <p>
      {author}
    </p>
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
