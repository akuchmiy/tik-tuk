import React, { FC, useMemo } from 'react'
import { UserData } from '../../models/UserData'
import NumberService from '../../services/NumberService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface UserInfoProps {
  userData: UserData
}

const UserInfo: FC<UserInfoProps> = ({ userData }) => {
  const { likes, followers, following } = useMemo(() => {
    const stats = userData?.stats
    if (stats) {
      const likes = NumberService.formatNumber(stats.heart, 1)
      const followers = NumberService.formatNumber(stats.followerCount, 1)
      const following = NumberService.formatNumber(stats.followingCount, 1)
      return { likes, followers, following }
    }
    return { likes: '', followers: '', following: '' }
  }, [userData])

  return (
    <div className={'mb-6 md:mb-12'}>
      <div
        className={
          'items-center text-center sm:text-left flex flex-col sm:flex-row'
        }
      >
        <div
          className={
            'w-52 sm:w-32 md:w-48 h-52 sm:h-32 md:h-48 mb-4 sm:mb-0 sm:mr-5 rounded-3xl shadow-lg'
          }
        >
          <div className={'w-full h-full overflow-hidden rounded-3xl'}>
            <img
              className={'object-cover'}
              src={userData.user.avatarMedium}
              alt={`${userData.user.uniqueId} avatar`}
            />
          </div>
        </div>
        <div>
          <div className={'mb-4'}>
            <h2 className={'text-3xl md:text-5xl mb-3'}>
              <span>{userData.user.nickname}</span>
              {userData.user.verified && (
                <FontAwesomeIcon
                  className={'ml-4'}
                  icon={['fas', 'check-square']}
                />
              )}
            </h2>
            <p
              className={
                'text-xl md:text-3xl sm:max-w-min md:max-w-md xl:max-w-2xl break-words'
              }
            >
              {userData.user.signature}
            </p>
          </div>
          <ul
            className={
              'flex justify-center sm:justify-start gap-x-4 flex-wrap text-base md:text-xl'
            }
          >
            <li>
              <span>
                Followers: <b>{followers}</b>
              </span>
            </li>
            <li>
              <span>
                Likes: <b>{likes}</b>
              </span>
            </li>
            <li>
              <span>
                Following: <b>{following}</b>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
