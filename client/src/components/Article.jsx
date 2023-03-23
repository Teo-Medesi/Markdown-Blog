import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    fetch(`/api/articles/${id}`).then((response) => {
      response.json().then((data) => {
        setArticle(data.article);
      });
    });
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <article className="p-6 lg:p-12 w-full gap-4 flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl">{article.title}</h1>
        <h3 className="text-lg text-gray-400">{article.createdAt}</h3>
      </div>

      <div className="flex flex-row gap-2">
        <Link to="/" className="p-2 px-4 rounded-md text-white bg-gray-500">
          All Articles
        </Link>
        <button className="p-2 px-4 rounded-md text-white bg-blue-500">
          Edit
        </button>
      </div>
      <div>
        <p className="text-gray-700 w-full">{article.markdown}</p>
      </div>
    </article>
  );
};

export default Article;
