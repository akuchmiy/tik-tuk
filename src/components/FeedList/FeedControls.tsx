import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FeedControlsProps {
  columns: number
  setColumns: (columns: number) => void
  minColumns: number
  maxColumns: number
}

const FeedControls: FC<FeedControlsProps> = ({
  setColumns,
  columns,
  minColumns,
  maxColumns,
}) => {
  function changeColumns(direction: 'UP' | 'DOWN') {
    if (direction === 'UP') {
      setColumns(columns + 1)
    } else {
      setColumns(columns - 1)
    }
  }

  return (
    <div
      className={
        'fixed top-1/3 right-2 p-1 flex flex-col text-xl bg-pink-200 border-2 border-pink-300 rounded-2xl text-gray-700 ' +
        'dark:text-gray-100 dark:bg-gray-700 dark:border-gray-300'
      }
      aria-hidden
    >
      <button
        disabled={columns === maxColumns}
        className={'hover:text-gray-400'}
        onClick={() => changeColumns('UP')}
        tabIndex={0}
      >
        <FontAwesomeIcon icon={['fas', 'plus']} />
      </button>
      <div className={'w-full h-px bg-gray-700 my-2 dark:bg-gray-100'} />
      <button
        disabled={columns === minColumns}
        className={'hover:text-gray-400'}
        onClick={() => changeColumns('DOWN')}
      >
        <FontAwesomeIcon icon={['fas', 'minus']} />
      </button>
    </div>
  )
}

export default FeedControls
