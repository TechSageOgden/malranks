const express = require('express')
const path = require("path")

const dotenv = require("dotenv");
dotenv.config();

const Dynamo = require("./dynamosecurity")
const dynamicRoute = new Dynamo()
let slug = dynamicRoute.create(128)

const app = express()



const API_KEY = process.env.API_KEY
// Use required parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public/")));
app.set("views", path.join(__dirname, "public/views"));

app.set("view engine", "ejs");

// Routes
app.get(`/slug=${slug}`, async (req, res) => {
    console.log('~Check!~')
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


app.get('/', async (req, res) => {
    res.render('index', {title: "MAL Ranks", data: slug, status: 200})
})

module.exports = app;