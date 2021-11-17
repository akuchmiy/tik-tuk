export interface UserData {
  user: User
  stats: {
    followerCount: number
    followingCount: number
    heart: number
    videoCount: number
    diggCount: number
  }
}

interface User {
  id: string
  uniqueId: string
  nickname: string
  avatarMedium: string
  avatarThumb: string
  signature: string
  bioLink: {
    link: string
    risk: number
  }
  verified: boolean
}
