import express from "express"
import cors from "cors"

const app = express();

app.use(cors());

app.get("/",  (req, res) => {
    const articles = [
        {
            title: "Test article",
            createdAt: new Date().toLocaleDateString(),
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur facilis itaque ipsa qui voluptatibus inventore enim non reprehenderit, nulla odio totam! Accusantium suscipit voluptatem praesentium adipisci ex, voluptatum impedit voluptas rerum dolorem.",
        },

        {
            title: "Test article 2",
            createdAt: new Date().toLocaleDateString(),
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur facilis itaque ipsa qui voluptatibus inventore enim non reprehenderit, nulla odio totam! Accusantium suscipit voluptatem praesentium adipisci ex, voluptatum impedit voluptas rerum dolorem.",
        }
    ]

    res.status(200).json({articles: articles});   
});

app.post("/", (req, res) => {

});

app.listen(5000, () => {
    console.log("Started server on port 5000...")
});