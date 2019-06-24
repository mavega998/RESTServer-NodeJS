const { config } = require('./config/config')
const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.set('port', config.port);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

// Routes
app.use('/api/users', require('./routes/user.router.js'));
app.use('/api/testRedis', require('./routes/test.router'));

app.listen(app.get('port'), () => {
    console.log(`Server run on port ${app.get('port')}`);
});