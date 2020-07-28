module.exports = format => {
    return (req, res, next) => {
        const time = new Date().toISOString();
        switch (format) {
            case "short":
                console.log(`[${time}] ${req.method} ${req.url}`);
                break;
            case "long":
            default:
                console.log(
                    `[${time}] $${req.ip} - ${req.method} ${req.url} - ${req.headers["user-agent"]}`
                );
        }
        next();
    };
};
