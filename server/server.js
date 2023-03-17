import express from "express"
import cors from "cors"

const app = express();

app.use(cors());

app.get("/",  (req, res) => {
    console.log("get")
    res.status(200).json({article: "Kurac"});
});

app.listen(5000, () => {
    console.log("Started server on port 5000...")
});