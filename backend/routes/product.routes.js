import express from "express";

const router = express.Router();

import { getKey, processPayment } from "../controllers/product.controller.js";
router.route("/payment/process").post(processPayment);
router.route("/getKey").get(getKey);

export default router;