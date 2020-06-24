import React from 'react'
import { debounce } from 'lodash'

interface SearchInputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  onChange(value: string): void
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange, ...props }) => {
  const debouncedOnChange = debounce((value: string) => onChange(value), 300)
  return (
    <input
      type="text"
      className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={event => debouncedOnChange(event.target.value)}
      {...props}
    />
  )
}

export default SearchInput
