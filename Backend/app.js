import express from 'express';
import router from './routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).catch(err => {
    console.error('Error connecting to MongoDB', err);
});
mongoose.connection.once('open', () => { console.log('Connected to MongoDB Successfully') });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => console.log(`Server is running on port: ${port}`));