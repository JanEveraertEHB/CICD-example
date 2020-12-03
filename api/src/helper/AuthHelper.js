module.exports = helpers = {
  userIsLoggedIn: function (req, res, next) {
    console.log("init")
    console.log(req.headers)
    next()
  }
}
