import express from "express";
import { collectionsController } from "../controllers/index.js";
const collectionsRouter = express.Router();

collectionsRouter.get("/:type", collectionsController.getProductByType);

collectionsRouter.post(
  "/create-collection",
  collectionsController.createCollection
);

collectionsRouter.post(
  "/create-collection-child",
  collectionsController.createCollectionChild
);

collectionsRouter.post(
  "/delete-collection",
  collectionsController.deleteCollection
);

collectionsRouter.post(
  "/delete-collection-child",
  collectionsController.deleteCollectionChild
);

collectionsRouter.get("/get/all", collectionsController.getAllCollections);

export default collectionsRouter;
