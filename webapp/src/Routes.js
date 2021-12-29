import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './components/Home'
import { LoginBox } from './components/LoginBox'

function AppRouter() {
  return (
    <Router>
      <div css={layoutStyle}>
        <div className='main-content' css={contentStyle}>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route component={LoginBox} exact path='/login' />
          <Route component={Home} exact path='/home' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const contentStyle = css`
  grid-row: 2;
`