import app from "./app.js";
import dotenv from "dotenv"
import Razorpay from "razorpay";

dotenv.config();

const port = process.env.PORT || 4000;


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})