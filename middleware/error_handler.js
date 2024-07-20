
const error_handler = (error, req, res, next) => {
    // default error
    let status = 500;
    let data = {
        success: false,
        message: 'Internal Server Error'
    }

    if (error.status){
        status = error.status;
    }

    if (error.message){
        data.message = error.message;
    }

    return res.status(status).json(data);
}

module.exports = error_handler;