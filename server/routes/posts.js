const express = require("express");
const multer = require("multer");
const router = express.Router();
const Post = require("../model/postSchema");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Route for creating a new post
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { text } = req.body;
    const image = req.file.filename;

    const post = new Post({ text, image });
    await post.save();

    res.status(201).json({ success: true, message: "Post created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error creating post" });
  }
});

// Route for retrieving all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error retrieving posts" });
  }
});

module.exports = router;
