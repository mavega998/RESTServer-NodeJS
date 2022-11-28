require('dotenv').config();

const config = {
    port: process.env.PORT,
    apiRM: process.env.API_RICK_MORTY
};

module.exports = { config };