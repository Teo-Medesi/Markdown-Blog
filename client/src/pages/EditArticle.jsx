import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    fetch(`/api/articles/${id}`).then(response => {
      response.json().then(data => {
        setArticle(data.article);
      })
    })
  }

  const submitForm = event => {
    event.preventDefault();
    
    fetch(`/api/articles/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: article.title,
        description: article.description,
        markdown: article.markdown
      }),
      type: "cors",

    }).then(response => {
      if (response.status === 200) navigate(`/articles/${id}`);
    })
  }

  useEffect(() => {
    fetchArticle();
  }, [])

  return (
    <form className="flex flex-col gap-8 p-6 lg:p-12 w-full lg:w-2/3 xl:w-1/2">
      <h1 className="text-4xl text-gray-900">Edit Article</h1>
      <div className="w-full flex flex-col gap-2">
        <h3>Title</h3>
        <input
          onChange={(event) => setArticle({...article, title: event.target.value})}
          name="title"
          className="outline-none border-gray-600 border rounded p-2 w-full"
          type="text"
          defaultValue={article.title}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <h3>Description</h3>
        <textarea
          onChange={(event) => setArticle({...article, description: event.target.value})}
          name="description"
          className="outline-none border-gray-600 border rounded p-2 w-full"
          type="text"
          defaultValue={article.description}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <h3>Markdown</h3>
        <textarea
          onChange={(event) => setArticle({...article, markdown: event.target.value})}
          name="markdown"
          className="outline-none h-32 border-gray-600 border rounded p-2 w-full"
          type="text"
          defaultValue={article.markdown}
        />
      </div>
      <div className="flex flex-row gap-2">
        <Link to="/" className="p-2 px-4 text-white bg-gray-700 rounded">
          Cancel
        </Link>
        <button
          onClick={submitForm}
          className="p-2 px-4 text-white bg-blue-500 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditArticle