const express = require('express');
const BooksService = require('./books-service');
const { API_TOKEN } = require('../config');
const fetch = require('node-fetch');

const booksRouter = express.Router();

booksRouter
    .route('/')
    .get((req, res, next) => {
        res.json({'cheese': 'wine'})
    })

booksRouter
    .route('/search/:book_params')
    .get((req, res, next) => {
        const params = req.params.book_params;
        const endpoint = "https://www.googleapis.com/books/v1/volumes?";
        const searchParams = `q=${params}&key=${API_TOKEN}`;
        const url = endpoint + searchParams;
        fetch(url)
            .then(resp => resp.json())
            .then(resp => res.send({resp}))
    })

module.exports = booksRouter;