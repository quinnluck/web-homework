import React, { useState } from 'react'
import { css } from '@emotion/core'
import { TextInput } from '../common/TextInput'
import { Logo } from '../Logo';

export const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
  return (
    <div css={ContainerStyle}>
        <Logo />
        <div css={InputStyle}>
          <TextInput placeholder='Username' onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div css={InputStyle} >
          <TextInput placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
        </div>
    </div>
  )
}

const ContainerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    border: 1px solid black;
`

const InputStyle = css`
  margin-bottom: 10px;
`