const express = require("express");
const BlogRouter = express.Router();

const {
  NewBlog,
  GetBlog,
  GetOneBlog,
  UpdateBlog,
  DeleteBlog,
} = require("../controllers/blogs.controller");
const multerMiddleware = require("../middleware/multer.middlewear");

BlogRouter.post("/addblog", multerMiddleware.multerUploader.single("picture"), NewBlog);
BlogRouter.get("/getblog", GetBlog);
BlogRouter.get("/getBlog/:blogID", GetOneBlog);
BlogRouter.put("/update/:blogID", UpdateBlog);
BlogRouter.delete("/delete/:blogID", DeleteBlog);

module.exports = BlogRouter;
