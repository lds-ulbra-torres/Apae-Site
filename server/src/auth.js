import passport from "passport"
import {Strategy,ExtractJwt} from "passport-jwt"

module.exports = app => {
    
    const opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    opts.secretOrKey = app.config.config.jwtSecret
    opts.jwtSession = app.config.config.jwtSession

    const Users = app.config.db.models.users
    
    const strategy = new Strategy(opts,
    (jwt_payload, done) => {
        Users.findOne({where : {id: jwt_payload.id}})
        .then( user => {
            user = {
                id : user.id,
                email : user.email
            }
            if (user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
        .catch(error => {
            done(error, null)
        })
    })
    
    passport.use(strategy)
    
    return {
        initialize: () => {
            return passport.initialize()
        },
        authenticate: () => {
            return passport.authenticate("jwt", opts.jwtSession)
        }
    }
}