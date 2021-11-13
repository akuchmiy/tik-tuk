import React, { FC } from 'react'
import BasicInput from '../BasicInput/BasicInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router-dom'

const HeaderSearch: FC = () => {
  const query = useInput('')
  const navigate = useNavigate()

  function findByQuery() {
    navigate(`/?query=${query.value}`)
    query.setValue('')
  }

  return (
    <div className={'center relative overflow-hidden w-1/2 md:w-1/3'}>
      {/*TODO extract input*/}
      <BasicInput
        {...query.use()}
        placeholder={'Hashtag or nickname'}
        className={'w-full'}
        type="text"
      />
      {query.value && (
        <button
          onClick={findByQuery}
          className={
            'absolute right-2 border-2 border-pink-200 bg-pink-100 p-1 rounded-xl w-8 h-8'
          }
        >
          <FontAwesomeIcon className={'text-xl'} icon={['fas', 'search']} />
        </button>
      )}
    </div>
  )
}

export default HeaderSearch
