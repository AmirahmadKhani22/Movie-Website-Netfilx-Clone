function recursiveDeepObjectCloning(obj) {
    for(var item in obj){
        if(Array.isArray(obj[item])) {
            obj[item] = Object.assign([] , obj[item])
            recursiveDeepObjectCloning(obj[item])
        } else {
            if(typeof obj[item] === 'object' && !(obj[item] instanceof RegExp) && obj[item] !== null) {
                obj[item] = Object.assign({} , obj[item])
                recursiveDeepObjectCloning(obj[item])
            }
        }
    }
}

function deepObjCloning(obj) {
    recursiveDeepObjectCloning(obj)
    return Object.assign({} , obj)
}

module.exports = deepObjCloning
