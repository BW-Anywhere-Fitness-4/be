module.exports = () => {
    return (req, res, next) => {
        if (!req.body || !req.body.username) {
            res.status(400).json({
                message: "Missing username"
            });
        } else {
            next();
        }
    };
};
