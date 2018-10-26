module.exports = {
    username:'apae_doacoes_tes',
    database:'apae_doacoes_tes',
    password:'', 
    params:{
      host: 'localhost',
      port: 3006,
      dialect: 'mysql',
      operatorsAliases: false
    },
    jwtSecret: "",
    jwtSession: {session: false},
    localStorage : '../../public/uploads',
    hostStorage: 'localhost'
  }
