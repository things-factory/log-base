import { logResolver } from './log'
import { logsResolver } from './logs'

export const Query = {
  ...logResolver,
  ...logsResolver
}