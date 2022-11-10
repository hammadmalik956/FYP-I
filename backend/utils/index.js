



const validationError = (errors) => {
    const errorMessage = errors.details[0].message;
    console.log("Validation Error = >", errorMessage);
    return errorMessage
}


module.exports ={ validationError}