import { Log } from './log'
import { LogList } from './log-list'

// export const Mutation = ``

export const Query = `
  logs(filters: [Filter], pagination: Pagination, sortings: [Sorting]): LogList
  log(name: String!): Log
`

export const Types = [Log, LogList]