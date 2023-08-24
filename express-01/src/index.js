import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Listen to the door ${process.env.PORT}`)
})