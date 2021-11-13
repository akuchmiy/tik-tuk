import axios, { AxiosInstance } from 'axios'
import { Feed } from '../models/Feed'

const apiClient = axios.create({
  url: 'https://tiktok33.p.rapidapi.com/',
})

class FeedService {
  constructor(private apiClient: AxiosInstance) {}

  async getTrendingFeed(): Promise<Feed[]> {
    const { data } = await this.apiClient.get<Feed[]>('trending/feed')
    return data
  }
}

export default new FeedService(apiClient)
