// * IMPORT
// // framework
const express = require('express');
const morgan = require('morgan');
const Joi = require('joi');
const qs = require('qs');


// // object
const app = express();

// // data
const { quotes } = require('./data');

// // helper function
const { getRandomElement } = require('./utils');



// * SET UP SERVER
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));


// * GET

// Get a random quote
app.get('/api/quotes/random', (req, res) => {
    res.send({
        quote: getRandomElement(quotes)
    });
});


// Get all quotes if there is no query
// else return quote by the person
app.get('/api/quotes', (req, res) => {
    if (req.query.person !== undefined) {
        const quotesByPerson = quotes.filter(quote => quote.person === req.query.person);
        res.send({
            quotes: quotesByPerson
        });
    } else {
        res.send({
            quotes: quotes
        });
    }
});

// * POST

// Create a new quotes
app.post('/api/quotes', (req, res) => {
    const newQuote = {
        quote: req.query.quote,
        person: req.query.person
    };
    if (newQuote.quote && newQuote.person) {
        quotes.push(newQuote);
        res.send({ quote: newQuote });
    } else {
        res.status(400).send();
    }
});



app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}...`);
});






