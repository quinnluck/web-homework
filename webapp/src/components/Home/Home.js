import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../../gql/transactions.gql'
import { TxTable } from '../transactions/TxTable'
import { NavBar } from '../common/NavBar'

export function Home() {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  return (
    <Fragment>
      <NavBar />
      <div>
        {loading &&
          <Fragment>
            Loading...
          </Fragment>
        }
        {error &&
          <Fragment>
            <div>The DB your looking for is in another castle.</div>
            ¯\_(ツ)_/¯
          </Fragment>
        }
        {!loading &&
          <Fragment>
            <TxTable data={data.transactions} />
          </Fragment>
        }
      </div>
    </Fragment>
  )
}
