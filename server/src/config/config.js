export default {
    username:'root',
    database:'apae_doacoes',
    password:'', 
    params:{
      dialect: 'mysql',
      operatorsAliases: false
    },
    jwtSecret: "apae-api",
    jwtSession: {session: false},
    localStorage : '../../public/uploads'
  }