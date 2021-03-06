var seekerCreate = {
    firstname: {type: 'string', empty: false},
    lastname: {type: 'string', empty: false},
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 16, empty: false}
};

var seekerLogin = {
    email: {type: 'email', empty: false},
    password: {type: 'string', min: 8, max: 16, empty: false}
};

module.exports = {
    userCreate,
    userLogin
}