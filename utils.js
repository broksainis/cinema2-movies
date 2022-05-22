const { XMLParser } = require('fast-xml-parser');
const request = require('request');

const PARSER_OPTIONS = {
    ignoreAttributes: false
};

const getCurrentMoviesList = async (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, res, body) => {
            if (!error && res.statusCode == 200) {
                const parser = new XMLParser(PARSER_OPTIONS);
                const jsonContent = parser.parse(body);
                const events = jsonContent.Events.Event;
                resolve(events);
            } else {
                reject(error);
            }
        });
    })
};

module.exports = {
    getCurrentMoviesList
}