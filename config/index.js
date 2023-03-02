require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    apiRM: process.env.API_RICK_MORTY
};

module.exports = { config };