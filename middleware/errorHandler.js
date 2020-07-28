module.exports = () => {
    return (err, req, res, next) => {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong. Please try again later."
        });
    };
};
