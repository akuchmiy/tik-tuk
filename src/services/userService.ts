import { AxiosInstance } from 'axios'
import apiClient from './apiClient'
import { UserData } from '../models/UserData'

class UserService {
  constructor(private apiClient: AxiosInstance) {}

  async getUserInfo(username: string): Promise<UserData | null> {
    try {
      const { data } = await this.apiClient.get<UserData>(
        `user/info/${username}`
      )
      if (!data?.user) return null

      return data
    } catch (e) {
      return null
    }
  }
}

export default new UserService(apiClient)
