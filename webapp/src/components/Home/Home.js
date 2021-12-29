import React, { Fragment } from 'react'
import { NavBar } from '../common/NavBar'
import { Container } from '@material-ui/core'
import { css } from '@emotion/core'
import { TransactionCRUD } from '../TransactionCRUD/TransactionCRUD'
import { TransactionTable } from '../TransactionTable/TransactionTable'


export function Home() {
  

  return (
    <Fragment>
      <NavBar />
      <Container css={ContainerStyle}>

        <TransactionCRUD />
        <TransactionTable />

      </Container>
    </Fragment>
  )
}

const ContainerStyle = css`
  border: 1px solid black;
  width: 100%;
  height: 100%;
`
