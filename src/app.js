import express from 'express';
import path from 'path';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import axios from 'axios';
const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'))





app.listen(port, () => console.log('server is running'));