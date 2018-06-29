module.exports = {
    username:'apae_doacoes_tes',
    database:'apae_doacoes_tes',
    password:'Presidente*111', 
    params:{
      host: 'mysql986.umbler.com',
      port: 41890,
      dialect: 'mysql',
      operatorsAliases: false
    },
    jwtSecret: "NTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJVadQssw5ceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFt",
    jwtSession: {session: false},
    localStorage : '../../public/uploads',
    hostStorage: 'http://api-test-apaetorres-org-br.umbler.net'
  }