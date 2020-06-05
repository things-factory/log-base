import gql from 'graphql-tag'

export const LogList = gql`
  type LogList {
    items: [Log]
    total: Int
  }
`