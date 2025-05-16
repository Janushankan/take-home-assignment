authMiddleware = (req, res, next) => {
    // TODO: Implement auth middleware
    //get token from header
    //verify token
    //add user to request
    next();
}

module.exports = {
    authMiddleware
}