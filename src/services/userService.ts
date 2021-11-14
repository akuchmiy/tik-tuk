import { AxiosInstance } from 'axios'
import apiClient from './apiClient'
import { User } from '../models/User'

class UserService {
  constructor(private apiClient: AxiosInstance) {}

  async getUserInfo(username: string): Promise<User> {
    const { data } = await this.apiClient.get<User>(`user/info/${username}`)
    return data
  }
}

export default new UserService(apiClient)
