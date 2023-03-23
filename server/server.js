import express from "express";
import cors from "cors";
import Article from "./models/Article.js";
import mongoose from "mongoose";

const app = express();

// if we want expres to be able to read JSON data, we need to state it so:
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/blog", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


// this get's called when the user presses the submit button on our new article form
app.post("/", async (req, res) => {
  try {
      let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
        createdAt: new Date().toLocaleDateString(),
      });

      article = await article.save();
      if (article) res.status(201).json({ message: "created successfully", article: article});

  } catch (error) {
      console.log(error);
      res.status(400).json({ message: "server error", error: error});
    }

});

app.get("/", async (req, res) => {
  const demoArticles = [
    {
      title: "Test article",
      createdAt: new Date().toLocaleDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur facilis itaque ipsa qui voluptatibus inventore enim non reprehenderit, nulla odio totam! Accusantium suscipit voluptatem praesentium adipisci ex, voluptatum impedit voluptas rerum dolorem.",
    }
  ]

  try {
    // getting our articles from our mongoose database
    const articles = await Article.find();
    
    // if the user hasn't created any articles, we'll just send back a demo article
    if (articles && articles.length != 0) res.status(200).json({message: "successfully got articles", articles: articles})
    else res.status(200).json({message: "no articles found", articles: demoArticles});
    
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({message: "server error", error: error});
  } 
});

app.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findOne({slug: req.params.id});  
    res.status(200).json({message: "found article", article: article});  
  }
  catch(error) {
    console.error(error);
    res.status(404).json({message: "id param matches no articles"})
  }
})

app.delete("/articles/:id", async (req, res) => {
  try {
    await Article.deleteOne({slug: req.params.id});
    res.status(204).json({message: `deleted ${req.params.id} successfully`});
  }
  catch (error) {
    console.error(error);
    res.status(500).json({message: "server error", error: error});
  }
})

app.listen(5000, () => {
  console.log("Started server on port 5000...");
});
