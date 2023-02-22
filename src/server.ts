import express from 'express'
import routes from './routes/index'
import dotenv from 'dotenv'

export default class Server {
  public app

  constructor () {
    dotenv.config()
    
    this.app = express()
    
    this.app.use(express.json())
    this.app.use('/api', routes)
  }
}
