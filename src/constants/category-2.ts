const category2 = [
  {}
]
  .reverse()
  .map((article, i) => ({
    ...article,
    views: Math.floor(Math.random() * 1000 + 1000),
    readTime: `${Math.floor(Math.random() * (5 - 3 + 1)) + 3} min read`,
    articleNumber: i + 1,
  })) as TArticle[];


export default category2