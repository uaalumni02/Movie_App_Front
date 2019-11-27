import express from 'express';
import path from 'path';
import ejs from 'ejs';
import bodyParser from 'body-parser';
const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'))

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    return res.render('login')
});

app.get('/movies', (req, res) => {
    return res.render('addMovie')
});
app.get('/movie/:id', (req, res) => {
    return res.render('movie')
});
app.get('/update/:id', (req, res) => {
    return res.render('updateMovie')
});
app.get('/allMovies/', (req, res) => {
    return res.render('allMovies')
});

app.listen(port, () => console.log('server is running'));