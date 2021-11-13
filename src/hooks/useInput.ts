import React, { useCallback, useState } from 'react'

const useInput = (initialState: string) => {
  const [value, setValue] = useState<string>(initialState)
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [setValue]
  )

  const use = () => {
    return { value, onChange }
  }

  return { value, use, setValue }
}

export default useInput
