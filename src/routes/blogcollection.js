import express from "express";
import {
  blogCollectionController,
  blogController,
} from "../controllers/index.js";

const blogCollectionRouter = express.Router();

blogCollectionRouter.post(
  "/create-collection",
  blogCollectionController.createBlogCollection
);

blogCollectionRouter.post(
  "/delete-collection",
  blogCollectionController.deleteBlogCollection
);

blogCollectionRouter.get("/fake", blogCollectionController.insertBlog);

// blogCollectionRouter.post(
//   "/create-blog",
//   blogCollectionController.deleteBlogCollection
// );

blogCollectionRouter.get(
  "/all",
  blogCollectionController.getAllBlogCollections
);

blogCollectionRouter.get("/allblog", blogController.getAllBlog);

blogCollectionRouter.post("/create-blog", blogController.createBlog);

blogCollectionRouter.get("/:collection_", blogController.getBlogByCollection);

blogCollectionRouter.get(
  "/:collection_/:category",
  blogController.getBlogByCategory
);

export default blogCollectionRouter;
