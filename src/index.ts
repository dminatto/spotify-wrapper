import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()
export default class SpotifyWrapper {
  token: string
  url: string
  constructor(options: any) {
    this.url = options.apiUrl || process.env.API_URL
    this.token = options.token
  }

  async request(query: string): Promise<any> {
    return await axios.get(`${this.url}v1/search?${query}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `'Bearer ${this.token}'`,
      },
    })
  }
}
