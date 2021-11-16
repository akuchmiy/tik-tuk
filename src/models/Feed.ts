import { AuthorMeta } from './AuthorMeta'

export interface Hashtag {
  id: string
  name: string
}

export interface Feed {
  id: string
  text: string
  createTime: number
  authorMeta: AuthorMeta
  videoUrl: string
  videoMeta: {
    height: number
    width: number
  }
  hashtags: Hashtag[]
  playCount: number
  diggCount: number
  commentCount: number
}
