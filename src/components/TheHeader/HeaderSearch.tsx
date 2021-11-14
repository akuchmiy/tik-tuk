import React, { FC, FormEvent, useMemo } from 'react'
import BasicInput from '../BasicInput/BasicInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router-dom'

const HeaderSearch: FC = () => {
  const query = useInput('')
  const navigate = useNavigate()
  const [newLocation, ariaNavigateTo] = useMemo(() => {
    if (!query.value) return ['', 'Enter hashtag or username']

    if (query.value.startsWith('#')) {
      const withoutHash = query.value.slice(1)
      return [`/?query=${withoutHash}`, `Get trending news by hashtag`]
    } else return [`/user/${query.value}`, 'Find user by username']
  }, [query])

  function findByQuery(e: FormEvent) {
    e.preventDefault()
    if (newLocation) navigate(newLocation)
    query.setValue('')
  }

  return (
    <form
      onSubmit={findByQuery}
      className={'center relative overflow-hidden w-1/2 md:w-1/3'}
    >
      {/*TODO extract input*/}
      <BasicInput
        aria-label={ariaNavigateTo}
        {...query.use()}
        placeholder={'Hashtag or nickname'}
        className={'w-full'}
        type="text"
      />
      {query.value && (
        <button
          type={'submit'}
          aria-label={ariaNavigateTo}
          className={
            'absolute right-2 border-2 border-pink-200 bg-pink-100 p-1 rounded-xl w-8 h-8'
          }
        >
          <FontAwesomeIcon className={'text-xl'} icon={['fas', 'search']} />
        </button>
      )}
    </form>
  )
}

export default HeaderSearch
