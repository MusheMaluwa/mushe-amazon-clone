const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const { CurrencyBitcoin } = require('@mui/icons-material')
const stripe = require('stripe')('sk_test_51PqaIiP0FHqckE33v1EnUiPXzK09Jq1cuioKthXLvM71EhbX7O4WevAHmIIfkz4YhfTEy56s8mJ6azATe92BBkZv00KrXNnTlS')

// -API

// -APP Config
const app = express ()

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json())

// -API Routes
app.get('./', (req,res) => res.status(200).send('Hello World'))


app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log("Payment request received")

    const PaymentIntent = await stripe.PaymentIntents.create({
        amount: total,
        Currency: "usd",
    })
    //if okay created 
    res.status(201).send({clientSecret: PaymentIntent.client_secret })
});

// -Listen Commands
exports.api = functions.https.onRequest(app);
