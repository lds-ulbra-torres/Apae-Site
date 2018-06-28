module.exports = (obj, msg) => {
    return {
        defaultMsg : () => ({ status : 200, msg, obj }),
        eventCreateMsg : (response, vetor) => ({ status : 200, msg, 
            obj : {
            id : response.id,
            title: response.title,
            discription: response.description,
            main_photo: response.main_photo,
            EventPhotos: vetor
        } }),
        erroMsg : () => ({ status: 400, msg: `${obj.errors[0].path} ${obj.errors[0].type}`, obj : {} }),
        inexistentMsg : () => ({ status: 400, msg, obj : {} })
    }
}