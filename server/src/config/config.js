export default {
    username:'apae_doacoes',
    database:'apae_doacoes',
    password:'azsx123445', 
    params:{
      host: 'mysql427.umbler.com',
      port:41890,
      dialect: 'mysql',
      operatorsAliases: false
    },
    jwtSecret: "apae-api",
    jwtSession: {session: false},
    localStorage : '../../public/uploads'
  }