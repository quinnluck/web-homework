import React from 'react'

export const TextInput = ({ placeholder, onChange }) => {
  return(
  <input
    type='text'
    placeholder={placeholder}
    onChange={onChange}
  ></input>
  )
}