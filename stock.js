const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "hello this is other stuff"

// Set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
		stuff: otherstuff
	});
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('sever listening on port' + PORT));

