import 'dotenv/config';
import express from 'express';
import sequelize from './db/db.js';
import Book from './db/models/Book.js';
import { configurePrometheusExporter } from './prometheus-exporter-express.js';

configurePrometheusExporter('express');

const app = express();
const port = process.env.PORT || 4000;

sequelize
    .sync({ force: true })
    .then(async () => {
        const books = await Book.findAll();

        if (!books.length) {
            await Book.bulkCreate([
                { title: 'Book 1', author: 'Author 1' },
                { title: 'Book 2', author: 'Author 2' },
                { title: 'Book 3', author: 'Author 3' },
            ]);

            console.log('created some mock data');
        }

        console.log('Database connected and synced');
    })
    .catch((err) => {
        console.log('Failed to sync models', err);
    });

app.get('/api/books', async (req, res) => {
    const books = await Book.findAll();
    return res.json(books);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
