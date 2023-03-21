import express from "express";
import cors from "cors";
import Article from "./models/Article.js";

const app = express();

// if we want expres to be able to read JSON data, we need to state it so:
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

app.post("/", async (req, res) => {
  // this get's called when the user presses the submit button on our new article form
  console.log("reqbody: ", req.body);

  // the Article data will be in the req.body
  if (req.body) {
    let article = new Article({
      title: req.body.title,
      description: req.body.description,
      markdown: req.body.markdown,
      createdAt: req.body.createdAt,
    });

    try {
      article = await article.save();
      res.status(201).json({ message: "created successfully", body: req.body});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error"});
    }

  }
  else {
    res.status(400).json({message: "client error, body empty"});
  }
});

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article",
      createdAt: new Date().toLocaleDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur facilis itaque ipsa qui voluptatibus inventore enim non reprehenderit, nulla odio totam! Accusantium suscipit voluptatem praesentium adipisci ex, voluptatum impedit voluptas rerum dolorem.",
    },

    {
      title: "Test article 2",
      createdAt: new Date().toLocaleDateString(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur facilis itaque ipsa qui voluptatibus inventore enim non reprehenderit, nulla odio totam! Accusantium suscipit voluptatem praesentium adipisci ex, voluptatum impedit voluptas rerum dolorem.",
    },
  ];

  res.status(200).json({ articles: articles });
});

app.listen(5000, () => {
  console.log("Started server on port 5000...");
});
