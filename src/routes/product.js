import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send("product");
});

productRouter.post("/create-product", productController.createProduct);

productRouter.post("/update-type", productController.updateTypeProduct);

//productRouter.get("/abc/a", productController.getProductByType);
productRouter.get("/getproducts", productController.getListProduct);

productRouter.get("/:title", productController.getProductByTitle);

productRouter.get("/fake/start", productController.insertProduct);

// router.post('/register', userController.register)

// router.get('/getuser',userController.getUser)

//router.post

export default productRouter;
