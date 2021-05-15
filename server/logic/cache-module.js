let dataMap = new Map();
function get(key) {
    return dataMap.get(key);
}

function set(key, value) {
    dataMap.set(key, value);
}

module.exports = {
    set,
    get,
    dataMap
}

//search in google login flow with jwt token
// This function should be in a separate module, because many resources will use it
function extractUserDataFromCache(request) {
    let authorizationString = request.headers["authorization"];
    // Removing the bearer prefix, leaving the clean token
    let token = authorizationString.substring("Bearer ".length);
    let userData = usersCache.get(token);
    return userData;
}
