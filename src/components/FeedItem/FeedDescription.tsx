import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { AuthorMeta } from '../../models/AuthorMeta'
import { Hashtag } from '../../models/Feed'

interface FeedDescriptionProps {
  authorMeta: AuthorMeta
  hashtags: Hashtag[]
  text: string
}

const FeedDescription: FC<FeedDescriptionProps> = ({
  authorMeta,
  hashtags,
  text,
}) => {
  const getTextWithoutHashtags = () => {
    const firstHash = text.indexOf('#')
    if (firstHash !== -1) return text.slice(0, firstHash)

    return text
  }

  return (
    <div className={'flex flex-grow mx-auto max-w-4xl mb-4'}>
      <Link className={'mr-3'} to={`/user/${authorMeta.name}`}>
        <img
          className={'w-14 h-14 object-cover rounded-full'}
          src={authorMeta.avatar}
          alt={`${authorMeta.name}'s avatar`}
        />
      </Link>
      <div>
        <h3 className={'text-xl'}>
          <Link className={'hover:underline'} to={`/user/${authorMeta.name}`}>
            {authorMeta.name}
          </Link>
        </h3>
        <p className={'break-words max-w-xs'}>
          {getTextWithoutHashtags()}
          {hashtags.map((hashtag) => (
            <Link key={hashtag.id} to={`/?query=${hashtag.name}`}>
              <strong>#{hashtag.name} </strong>
            </Link>
          ))}
        </p>
      </div>
    </div>
  )
}

export default FeedDescription
