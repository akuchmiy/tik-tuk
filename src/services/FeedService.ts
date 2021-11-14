import axios, { AxiosInstance } from 'axios'
import { Feed } from '../models/Feed'
import configService from '../config/configService'

const apiClient = axios.create({
  url: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': configService.getValue('REACT_APP_RAPIDAPI_KEY'),
  },
})

class FeedService {
  constructor(private apiClient: AxiosInstance) {}

  async pass() {
    return true
  }

  async getTrendingFeed(): Promise<Feed[]> {
    const { data } = await this.apiClient.get<Feed[]>('trending/feed')
    return data
  }
}

export default new FeedService(apiClient)
