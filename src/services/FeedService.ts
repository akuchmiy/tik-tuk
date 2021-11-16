import { AxiosInstance } from 'axios'
import { Feed } from '../models/Feed'
import apiClient from './apiClient'
// import configService from '../config/configService'

class FeedService {
  constructor(private apiClient: AxiosInstance) {}

  async pass() {
    return true
  }

  getTrendingFeed(): Promise<Feed[]> {
    let url, config
    // if (process.env.NODE_ENV === 'development') {
    //   url = configService.getValue('REACT_APP_DEV_FEED_URL')
    //   config = { baseURL: '' }
    // } else {
    url = '/trending/feed'
    config = {}
    // }
    return this.getFeed(url, config)
  }

  async getUserFeed(username: string): Promise<Feed[]> {
    const url = `/user/feed/${username}`
    return this.getFeed(url)
  }

  async getHashtagFeed(hashtag: string): Promise<Feed[]> {
    const url = `/hashtag/feed/${hashtag}`
    return this.getFeed(url)
  }

  private async getFeed(url: string, config?: Object) {
    try {
      const { data } = await this.apiClient.get<Feed[]>(url, config)
      if (!(data instanceof Array)) {
        return []
      }
      return data
    } catch (e) {
      return []
    }
  }
}

export default new FeedService(apiClient)
