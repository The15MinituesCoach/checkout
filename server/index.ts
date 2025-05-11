import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15"
});
app.use(
  cors({
    origin: "https://the15minutescoach.com/npd",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
app.use(cors());
app.use(express.json());

app.post("/api/create-payment-intent", async (req, res) => {
  const { customerName, customerEmail, productId = "narcissism-survival-guide" } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2900,
    currency: "usd",
    receipt_email: customerEmail,
    metadata: { productId, customerName, customerEmail },
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));