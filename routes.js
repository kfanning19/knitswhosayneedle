var path = require("path");

var patterns = require("./patterns.js");

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('home')
    });

    app.get('/about', function(req, res) {
        res.render('about')
    });

    app.get('/patterns', function(req,res){
    	res.render('patterns', {patterns: patterns})
    });

    app.get('/pattern/:name', function(req, res) {
    	for(var i=0; i<patterns.length; i++){
    		if(patterns[i].name === req.params.name){
    			if(patterns[i].pay){
    				res.render('paid', {pattern: patterns[i]})
    			} else{
    				res.render('free', {pattern: patterns[i]})
    			}

    		}
    	};
    });
}