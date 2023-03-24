import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
        <h1 className="text-5xl text-gray-800">{article.title}</h1>
        <h3 className="text-lg text-gray-500">{new Date(article.createdAt).toLocaleDateString(undefined, {month: "long", day: "2-digit", year: "numeric"})}</h3>
      </div>

      <div className="flex flex-row gap-2">
        <Link to="/" className="p-2 px-4 rounded-md text-white bg-gray-500">
          All Articles
        </Link>
        <Link to={`/articles/edit/${article.slug}`} className="p-2 px-4 rounded-md text-white bg-blue-500">
          Edit
        </Link>
      </div>
      <div>
        <ReactMarkdown className="text-gray-700 w-full">{article.markdown}</ReactMarkdown>        
      </div>
    </article>
  );
};

export default Article;
