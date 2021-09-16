import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <article>
    <title title={title}>
      Article Title
    </title>
    <caption author={author}>
      Author
    </caption>
    <p description={description}>
      Description Text
    </p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
