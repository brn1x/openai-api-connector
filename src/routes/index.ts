import { Request, Response, Router } from 'express'
import ChatGPT from './ChatGPT.routes'
import passport from '../middleware/passport'

const routes = Router()

routes.get('/', (_req: Request, res: Response) => {
  return res.json({ success: true, message: 'Successfully running' })
})

routes.use(passport)

routes.use('/chatgpt', ChatGPT)

export default routes
