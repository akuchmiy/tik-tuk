import { AxiosInstance } from 'axios'
import { Feed } from '../models/Feed'
import apiClient from './apiClient'
import configService from '../config/configService'

class FeedService {
  constructor(private apiClient: AxiosInstance) {}

  async pass() {
    return true
  }

  async getTrendingFeed(): Promise<Feed[]> {
    let url, config
    if (process.env.NODE_ENV === 'development') {
      url = configService.getValue('REACT_APP_DEV_FEED_URL')
      config = process.env.NODE_ENV === 'development' ? { baseURL: '' } : {}
    } else {
      url = '/trending/feed'
      config = {}
    }

    const { data } = await this.apiClient.get<Feed[]>(url, config)
    return data
  }

  async getUserFeed(username: string): Promise<Feed[]> {
    const { data } = await this.apiClient.get<Feed[]>(`/user/feed/${username}`)
    return data
  }

  async getHashtagFeed(hashtag: string): Promise<Feed[]> {
    const { data } = await this.apiClient.get<Feed[]>(
      `/hashtag/feed/${hashtag}`
    )
    return data
  }
}

export default new FeedService(apiClient)
