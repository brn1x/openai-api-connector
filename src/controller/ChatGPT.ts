import { Request, Response } from 'express'
import ChatGPTApi from '../services/ChatGPTApi'

export default class ChatGPT {
  async prompt(req: Request, res: Response) {
    if (!req.body || !req.body.prompt) {
      return res.status(400).json({
        success: false,
        statusMessage: 'Bad request',
        error: 'Missing info on body'
      })
    }

    const { prompt } = req.body

    try {
      const chatGPTService = new ChatGPTApi()

      const response = await chatGPTService.generatePrompt(prompt)
      
      console.log(response)
      return res.status(200).json({ success: true, result: response.choices })
    } catch (err) {
      if (err.response) {
        console.error(err.response.status, err.response.data)
        return res.status(err.response.status).json({ success: false, error: err.response.data })
      } else {
        console.error(`Error with OpenAI API Request: ${err.message}`)
        return res.status(500).json({
          success: false,
          error: 'An error occurred during your request.'
        })
      }
    }
  }
}
