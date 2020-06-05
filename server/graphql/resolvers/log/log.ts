import fs from 'fs'
import path from 'path'

import appRoot from 'app-root-path'

import { config } from '@things-factory/env'

export const logResolver = {
  async log(_, { name }, context) {

    let logPathFromAppRoot = config.get('logPathFromAppRoot')
    const logPath = path.resolve(appRoot.path, logPathFromAppRoot || 'logs', name)
    var text = (await fs.promises.readFile(logPath)).toString()
    return { name, text }
  }
}