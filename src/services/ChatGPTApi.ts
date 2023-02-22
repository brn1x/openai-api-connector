import { Configuration, OpenAIApi } from "openai"

export default class ChatGPTApi {
  private configuration
  public openai
  
  constructor () {
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })
    
    this.openai = new OpenAIApi(this.configuration)
  }

  async generatePrompt(prompt: string, customTemp?: number) {
    const response = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: customTemp || 0.6,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 2049,
      stop: ["{}"]
    })

    return response.data
  }
}
