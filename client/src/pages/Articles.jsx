import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/api", {
          headers: {
            "accept": "application/json"
          }
        }).then(response => {
            console.log(response)
            response.json().then(data => {
                setArticles(data.articles);
            })
        })
        
    }, [])

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-gray-900">Blog Articles</h1>
        <Link to="/articles/new" className="p-2 px-4 w-max bg-green-600 text-white rounded">New Article</Link>
      </div>

      {articles.map((article, index) => <Article key={index} title={article.title} description={article.description} date={article.createdAt}/>)}
    </div>
  );
};

export default Articles;
