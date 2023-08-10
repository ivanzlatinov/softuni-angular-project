function hasUser() {
    return (req, res, next) => {
        if(req.user){
            next();
        }else {
            res.status(401)
        }
       
    }
}

function hasGuest() {
    return (req, res, next) => {
        if(req.user){
            res.status(400)
        }else {
            next();
        }
       
    }
}

module.exports = {
    hasUser,
    hasGuest
};