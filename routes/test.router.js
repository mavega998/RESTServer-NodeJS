const { Router } = require('express');
const router = Router();

const { config } = require('../config');
const axios = require('axios');
const { createClient } = require('redis');

const client = createClient();

router.get('/character', async (req, res) => {
    await client.connect();
    let response = JSON.parse(await client.get(req.originalUrl));
    if (!response) {
        response = (await axios.get(`${config.apiRM}/character`, {
            params: req.query
        })).data
        await client.set(req.originalUrl, JSON.stringify(response));
    }
    await client.disconnect();
    res.json(response);
});
router.get('/character/:id');

module.exports = router;