import fs from 'fs'
import path from 'path'

import appRoot from 'app-root-path'

import { ListParam, convertListParams } from '@things-factory/shell'
import { config } from '@things-factory/env'

export const logsResolver = {
  async logs(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)

    let logPathFromAppRoot = config.get('logPathFromAppRoot')
    const logDirPath = path.resolve(appRoot.path, logPathFromAppRoot || 'logs')
    var fileList = await fs.promises.readdir(logDirPath, { withFileTypes: true })

    if (params.filters) {
      params.filters.forEach((filter) => {
        if (filter.name === 'name') {
          fileList = fileList.filter((dirent) => {
            return dirent.name.indexOf(filter.value) >= 0
          })
        }
      })
    }

    return { items: fileList, total: fileList.length }
  }
}