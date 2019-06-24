require('./config/config');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('port', process.env.PORT);

app.get('/user', (req, res) => {
    res.send('ok');
});

app.post('/user', (req, res) => {
    let newUser = req.body;
    res.json(newUser);
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/user', (req, res) => {
    res.send('ok');
});

app.listen(app.get('port'), () => {
    console.log(`Server run on port ${app.get('port')}`);
});