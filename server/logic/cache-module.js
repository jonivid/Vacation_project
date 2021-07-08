let dataMap = new Map();

function get(key) {
    return dataMap.get(key);
}

function set(key, value) {
    dataMap.set(key, value);
}

//search in google login flow with jwt token
// This function should be in a separate module, because many resources will use it
function extractUserDataFromCache(request) {
    console.log(request);
    // let authorizationString = request.headers["authorization"];
    // Removing the bearer prefix, leaving the clean token
    // let token = authorizationString.substring("Bearer ".length);
    let token = request.substring("Bearer ".length);
    let userData = dataMap.get(token);
    console.log(userData);

    return userData;
}
module.exports = {
    set,
    get,
    extractUserDataFromCache
}


