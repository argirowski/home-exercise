var signIn = (request, response) => {
    response.send("Successful Login");
};

var signOut = (request, response) => {
    response.send("Successful Logout");
};

var signUp = (request, response) => {
	response.send("Congradulations, you signed up")
};

module.exports = {
    signIn,
    signOut,
    signUp
}