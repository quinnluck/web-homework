import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Logo } from '../common/Logo';
import LoginIcon from '@material-ui/icons/AccountCircle'
import { TextField, Button } from '@material-ui/core';

export const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div css={ContainerStyle}>
      <Logo />
      <div css={InputStyle}>
        <TextField label='Username' variant='standard' onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div css={InputStyle} >
        <TextField label='Password' variant='standard' onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div css={InputStyle}>
        <Link to='/home'>
          <Button endIcon={<LoginIcon />} color='primary' variant='contained'>
            Login
          </Button>
        </Link>
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
  margin-bottom: 15px;
`