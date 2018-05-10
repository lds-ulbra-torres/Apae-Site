import app from './src/app'

const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
})
// para funcionar no windows os teste "npm install -g win-node-env"