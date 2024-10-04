import { useEffect, useState } from "react";
import Newsitem from "./newsitem";

function Newsboard({category}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&pagesize=100&category=${category}&apiKey=1a9f316dcf624d199f362bdbe98cf550`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error("Error fetching data: ", data);
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index) => (
        <Newsitem 
           key={index} 
           title={news.title} 
           description={news.description} 
           src={news.urlToImage} 
           url={news.url} 
        />
      ))}
    </div>
  );
}

export default Newsboard;
