import { AuthorMeta } from './AuthorMeta'

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
  hashtags: [{ name: string }]
  playCount: number
  diggCount: number
  commentCount: number
}
