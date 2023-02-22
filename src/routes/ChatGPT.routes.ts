import { Router } from 'express'
import ChatGPT from '../controller/ChatGPT'

const routes = Router()

const chatGPT = new ChatGPT()

routes.post('/prompt', chatGPT.prompt)

export default routes