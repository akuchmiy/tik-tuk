import axios from 'axios'
import configService from '../config/configService'

const apiClient = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com/',
    'x-rapidapi-key': configService.getValue('REACT_APP_RAPIDAPI_KEY'),
  },
})

export default apiClient
