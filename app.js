require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const booksRouter = require('./books/books-router');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.use('/api/books', booksRouter)

app.listen(8000, () => {
    console.log('Server running at 8000')
})
