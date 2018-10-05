var login = (req, res) => {
    res.send("Log In");
};

var logout = (req, res) => {
    res.send("Log Out");
};

module.exports = {
    login,
    logout
}