import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000")
        .then(response => {
            console.log(response)
            response.json
        })
        .then(data => {
            console.log(data)
        })

    }, [])

  return <div>Articles</div>;
};

export default Articles;
