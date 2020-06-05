import { Filter, Pagination, Sorting, ObjectRef } from '@things-factory/shell'

// import * as CommonCode from './common-code'
// import * as CommonCodeDetail from './common-code-detail'

import * as Log from './log'

// export const queries = [
//   CommonCode.Query,
//   CommonCodeDetail.Query
// ]

// export const mutations = [
//   CommonCode.Mutation,
//   CommonCodeDetail.Mutation
// ]

// export const types = [
//   ...CommonCode.Types,
//   ...CommonCodeDetail.Types
// ]

export const queries = [ Log.Query,  ]

export const mutations = []

export const types = [Filter, Pagination, Sorting, ObjectRef, ...Log.Types]
