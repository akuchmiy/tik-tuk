import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MAX_COLS = 3
const MIN_COLS = 1

interface FeedControlsProps {
  columns: number
  changeColumns: (direction: 'UP' | 'DOWN') => void
}

const FeedControls: FC<FeedControlsProps> = ({ changeColumns, columns }) => (
  <div
    className={
      'fixed top-1/3 right-2 p-1 flex flex-col text-xl bg-pink-300 rounded-2xl text-gray-700'
    }
    aria-hidden
  >
    <button
      disabled={columns === MAX_COLS}
      className={'hover:text-gray-400'}
      onClick={() => changeColumns('UP')}
      tabIndex={0}
    >
      <FontAwesomeIcon icon={['fas', 'plus']} />
    </button>
    <div className={'w-full h-px bg-gray-700 my-2'} />
    <button
      disabled={columns === MIN_COLS}
      className={'hover:text-gray-400 disabled:text-green-500'}
      onClick={() => changeColumns('DOWN')}
    >
      <FontAwesomeIcon icon={['fas', 'minus']} />
    </button>
  </div>
)

export default FeedControls
