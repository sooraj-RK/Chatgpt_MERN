const express = require("express");
const app = express();
const cors = require("cors");
const asyncHandler = require("express-async-handler");
const dotenv = require('dotenv').config();

const Response = require("./models/responseModel.js");

const bodyParser = require("body-parser");


const { Configuration, OpenAIApi } = require("openai");
const connectDb = require("./config/dbConnection");

connectDb()
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);


const PORT = 8080;
// Setup server


// app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

app.use("/api/responses",asyncHandler( async(req,res) => {
  console.log("The request body is :",req.body);
  const { prompt, reply } = req.body;
  if (!prompt || !reply ) {
    res.status(400);
    throw new Error("prompt or response is missing !");
  }
  const response = await Response.create({
    prompt,
    reply,
  });

  res.status(201).json(response);
}));


// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});



app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});