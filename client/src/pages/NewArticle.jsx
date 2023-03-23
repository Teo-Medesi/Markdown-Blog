import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const NewArticle = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [markdown, setMarkdown] = useState("");

    const navigate = useNavigate();


    const submitForm = event => {
        event.preventDefault();

        // sending a POST request to our server, creating a new article
        fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description,
                markdown: markdown
            }),
            type: "cors"   
        }).then(response => {
            if (response.status === 201) {
                response.json().then(data => {
                    navigate(`/articles/${data.article.slug}`);
                })
            }
        })
        
    }

  return (
    <form className="flex flex-col gap-8 p-6 lg:p-12 w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl text-gray-900">New Article</h1>
        <div className="w-full flex flex-col gap-2">
            
            <h3>Title</h3>
            <input onChange={event => setTitle(event.target.value)} name="title" className="outline-none border-gray-600 border rounded p-2 w-full" type="text" />
        </div>
        <div className="w-full flex flex-col gap-2">
            <h3>Description</h3>
            <textarea onChange={event => setDescription(event.target.value)} name="description" className="outline-none border-gray-600 border rounded p-2 w-full" type="text" />
        </div>
        <div className="w-full flex flex-col gap-2">
            <h3>Markdown</h3>
            <textarea onChange={event => setMarkdown(event.target.value)} name="markdown" className="outline-none h-32 border-gray-600 border rounded p-2 w-full" type="text" />
        </div>
        <div className="flex flex-row gap-2">
            <Link to="/" className="p-2 px-4 text-white bg-gray-700 rounded">Cancel</Link>
            <button onClick={submitForm} className="p-2 px-4 text-white bg-blue-500 rounded">Save</button>
        </div>
    </form>
  )
}

export default NewArticle