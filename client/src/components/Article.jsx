const Article = ({title, date, description}) => {
  return (
    <article className="rounded border-gray-400 p-6 lg:p-12 w-full lg:w-2/3 xl:w-1/2 gap-8 flex flex-col border">
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl">{title}</h1>
            <h3 className="text-lg text-gray-400">{date}</h3>
            <p className="text-gray-700 w-full">{description}</p>
        </div>
        <div className="flex flex-row gap-2">
            <button className="p-2 px-4 rounded-md text-white bg-blue-800">Read More</button>
            <button className="p-2 px-4 rounded-md text-white bg-blue-400">Edit</button>
            <button className="p-2 px-4 rounded-md text-white bg-red-600">Delete</button>
        </div>
    </article>
  )
}

export default Article