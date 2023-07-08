
const asyncHandler = require("express")
const Response = require("../models/responseModel");


// const getResponses =asyncHandler(async(req,res) => {
//     const responses =await Response.find({});
//     res.status(200).json(responses)
// });

// const createResponse = asyncHandler (async(req,res) => {
//     console.log("The request body is :", req.body);
//     const { prompt, reply } = req.body;
//     if (!prompt || !reply ) {
//       res.status(400);
//       throw new Error("prompt or response is missing !");
//     }
//     const response = await Response.create({
//       prompt,
//       reply,
//     });
  
//     res.status(201).json(response);
//   });

module.exports = {getResponses,createResponse};