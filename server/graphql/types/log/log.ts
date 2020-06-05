import gql from 'graphql-tag'

export const Log = gql`
  type Log {
    name: String!
    text: String
  }
`