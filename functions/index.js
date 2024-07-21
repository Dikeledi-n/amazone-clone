const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PXJifLLDSAP9kCL6bYXS97Qd0anVO1h9lgLt8QPqRTdjD7fbCL8gKTYVnJEq7POmBGGq2NmjDUQQywH606uVyp700oYhTaBxt");
// -API
// -APP CONFIG
const app = express("");
// -MIDDLELEWARES
app.use(cors({ origin: true }));
app.use(express.json());
// - API ROUTES
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request received", total);

  const paymentIntents = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //if okay created
  res.status(201).send({ clientSecret: paymentIntents.client_secret });
});
// - LISTEN COMMANDS
exports.api = functions.https.onRequest(app);