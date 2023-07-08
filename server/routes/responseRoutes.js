const express = require('express');
const router = express.Router();

const {
  getResponses,
  createResponse,
} = require("../controllers/responseController");




router.route("/").get(getResponses);

router.route("/").post(createResponse);

module.exports = router;
