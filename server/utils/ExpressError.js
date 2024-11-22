class ExpressError extends Error{
    constructor(statusCode, message ){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
};


const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong!";
    res.status(statusCode).json({ success: false, message });
  };


module.exports = { ExpressError  , errorHandler };