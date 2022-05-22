const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const utils = require('./utils.js');

// app constants
const APOLLO_KINO_EVENTS_URL = 'https://www.apollokino.lv/xml/Events?listType=NowInTheaters';

app.get("/", async (req, res) => {
    try {
        const movies = await utils.getCurrentMoviesList(APOLLO_KINO_EVENTS_URL);
        res.send(movies);
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log('Server started.');
})