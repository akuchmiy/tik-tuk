import { AxiosInstance } from 'axios'
import { Feed } from '../models/Feed'
import apiClient from './apiClient'

class FeedService {
  constructor(private apiClient: AxiosInstance) {}

  async pass() {
    return true
  }

  async getTrendingFeed(): Promise<Feed[]> {
    const { data } = await this.apiClient.get<Feed[]>('/trending/feed')
    return data
  }

  async getUserFeed(username: string): Promise<Feed[]> {
    const { data } = await this.apiClient.get<Feed[]>(`/user/feed/${username}`)
    return data
  }

  async getHashtagFeed(hashtag: string): Promise<Feed[]> {
    const { data } = await this.apiClient.get<Feed[]>(
      `/hashtag/feed/christmas${hashtag}`
    )
    return data
  }
}

export default new FeedService(apiClient)
