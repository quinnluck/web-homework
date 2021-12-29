import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../../gql/transactions.gql'
import { TxTable } from '../transactions/TxTable'

export const TransactionTable = () => {
    const { loading, error, data = {} } = useQuery(GetTransactions)

    return(
      <div>
        {loading &&
          <Fragment>
            Loading...
          </Fragment>
        }
        {error &&
          <Fragment>
            <div>The DB you're looking for is in another castle.</div>
            ¯\_(ツ)_/¯
          </Fragment>
        }
        {!loading &&
          <Fragment>
            <TxTable data={data.transactions} />
          </Fragment>
        }
      </div>
    );
}