import Server from './src/server'

const server = new Server()

server.app.listen(process.env.PORT || 3131, () => {
  console.info(`[express] -> Listenning on port ${process.env.PORT || 3131}`)
})
