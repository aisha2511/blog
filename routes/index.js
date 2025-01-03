const express = require('express');
const router = express.Router(); 
const userRoute = require("./user.route");
const blogRoute = require("./blog.route");
const commentRoute = require("./comment.route");

router.use("/user", userRoute);
router.use("/comment", commentRoute);
router.use("/blog", blogRoute);

module.exports = router;