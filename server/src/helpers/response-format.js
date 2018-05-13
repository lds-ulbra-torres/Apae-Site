export default (obj, msg) => {
    return {
        defaultMsg : () => ({ status : 200, msg, obj }),
        erroMsg : () => ({ status: 400, msg: `${obj.errors[0].path} ${obj.errors[0].type}`, obj : {} })
    }
}