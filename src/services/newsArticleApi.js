export const formatArticles = (json) =>
  json.articles.map((article) => ({
    title: article.title,
    author: article.author,
    description: article.description,
  }));

export const fetchArticlesByUserQuery = async (userQuery) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?q=&apiKey=${process.env.REACT_APP_API_KEY}&qInTitle=${userQuery}`);
  const json = await res.json();

  return formatArticles(json);
};
