// EXPRESS
import 'reflect-metadata'
import express from 'express';
import routes from './routes'
import './database/conection'

const app = express();
const port = 4000;

app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});