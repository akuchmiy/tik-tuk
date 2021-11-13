import {User} from "./User";

export interface Feed {
  id: string
  text: string
  createTime: number
  authorMeta: User
  videoUrl: string
  videoMeta: {
    height: number
    width: number
  }
  diggCount: number
  commentCount: number
}