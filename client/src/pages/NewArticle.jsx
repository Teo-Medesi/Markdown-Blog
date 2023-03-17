import { Link } from "react-router-dom"

const NewArticle = () => {

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-12 w-full lg:w-2/3 xl:w-1/2">
        <h1 className="text-4xl text-gray-900">New Article</h1>
        <div className="w-full flex flex-col gap-2">
            <h3>Title</h3>
            <input className="outline-none border-gray-600 border rounded p-2 w-full" type="text" />
        </div>
        <div className="w-full flex flex-col gap-2">
            <h3>Description</h3>
            <textarea className="outline-none border-gray-600 border rounded p-2 w-full" type="text" />
        </div>
        <div className="w-full flex flex-col gap-2">
            <h3>Markdown</h3>
            <textarea className="outline-none h-32 border-gray-600 border rounded p-2 w-full" type="text" />
        </div>
        <div className="flex flex-row gap-2">
            <Link to="/" className="p-2 px-4 text-white bg-gray-700 rounded">Cancel</Link>
            <button className="p-2 px-4 text-white bg-blue-500 rounded">Save</button>
        </div>
    </div>
  )
}

export default NewArticle