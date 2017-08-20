module.exports = function(app) {
	require('./landing_controller.js')(app);
	require('./skills_match_controller.js')(app);
	require('./user_skills_controller.js')(app);
	require('./add_skills_controller.js')(app);
	require('./users_controller.js')(app);

};



