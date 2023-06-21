import express from "express";
import { voucherController } from "../controllers/index.js";
const voucherRouter = express.Router();

voucherRouter.get("/get/all", voucherController.getAllVoucher);

voucherRouter.post("/create-voucher", voucherController.createVoucher);

voucherRouter.post("/delete-voucher",voucherController.deleteVoucher)

export default voucherRouter;
