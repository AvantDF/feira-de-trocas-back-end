import app from './src/server.js'

/* prettier-ignore */
app.listen(
    process.env.PORT,
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
)
