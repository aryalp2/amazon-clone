/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { Payment } = require("@material-ui/icons");
const stripe = require("stripe")("sk_test_51Iy5HPKgUVbaWdpYhcUWt6KXSLVuujDcLMhj9RYhHENYgKbI9oJR9arzoDwZcmpSkFIbTYS9lcXdVAjWyErmvh37009RppK9xH");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// API routes
app.get("/", (request, response) => response.status(200).send("hello world!!"))

app.post("/payments/create", async (request, response) => {
		const total = request.query.total;

		console.log("Payment Received", total);

		const paymentIntent = await stripe.paymentIntents.create({
			amount: total,
			currency: "usd"
		});

		// OK-Created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	})

// Listem command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-13c96/us-central1/api