import express from "express";

const router = express.Router();

import { processPayment } from "../controllers/product.controller.js";
router.route("/payment/process").post(processPayment);

export default router;