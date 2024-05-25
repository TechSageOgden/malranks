// MALRANKS - Wides🎸
// Bring in required Dependecies
const express = require('express')
const path = require("path")
const dotenv = require("dotenv");

//Standard config for env variables
dotenv.config();

// Slug generator
const Dynamo = require("./dynamosecurity")
const dynamicRoute = new Dynamo()
let slug = dynamicRoute.create(128)

//Instantiate express server
const app = express()

//Required Key
const API_KEY = process.env.API_KEY

// Use required parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public/")));

//Set path for views and set view engine
app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "ejs");

// Routes

// GET Ranking data from MAL and return top ten
app.get(`/slug=${slug}`, async (req, res) => {
    
    let url = `https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing&limit=10`
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            "X-MAL-CLIENT-ID": API_KEY,
        },
    })

    let data = await response.json()

    res.json({message: 'Wow, this actually works!', data})
})

// Home Page Render
app.get('/', async (req, res) => {
    res.render('index', {title: "MAL Ranks", data: slug, status: 200})
})

//Export app to bin/www
module.exports = app;