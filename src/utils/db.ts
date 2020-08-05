/* eslint-disable no-console */
import mongoose from 'mongoose';

const db = mongoose.connection;

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

db.once('open', () => {
    console.log('Connected to db!');
});

db.on('error', () => {
    console.log('Error connecting to db');
});

export default db;