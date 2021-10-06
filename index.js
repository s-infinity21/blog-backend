const express = require('express');
const dotenv = require('dotenv');
const expressEjsLayouts = require('express-ejs-layouts');

dotenv.config({ path: './config/.ENV' });

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressEjsLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//--Routes Section--\\
const homePage = require('./routes/home');
app.use('/', homePage);

app.listen(PORT, err => {
	if (err) {
		console.log('Error in running server');
		return;
	}
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT} => http://${process.env.HOSTNAME}:${PORT}/`
	);
});
