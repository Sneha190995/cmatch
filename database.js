const express = require('express');
const bodyParser = require('body-parser');
let mysql = require('mysql');


// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});


let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'recommendation'

})

connection.connect(function (err) {

	if (err) {
		return console.error('error: ' + err.message);

	}

	console.log('connected to mysql server.');

});

app.get('/users',function(req,res){
		connection.query("select * from user",function(error,rows){
			if(!!error){
				console.log('error in the query');
			}
			else{
				console.log('query is successful');
				console.log(rows);
				res.send(rows);
			}
	
		})
	})

	
app.post('/users', function (req, resp) {
	
	let data = {
		id: req.body.id,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		user_name: req.body.user_name,
		password: req.body.password,
		email: req.body.email,
		mobile_number: req.body.mobile_number,
		user_profile: req.body.user_profile
	};
	let sql = "INSERT INTO user SET ?";

	let query = connection.query(sql, data, function (error, result) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			
			resp.send(JSON.stringify({
				"status": 200,
				"error": null,
				"response": result
			}));

		}
	});
});

	

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
})