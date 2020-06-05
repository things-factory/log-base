import { ListParam, convertListParams } from '@things-factory/shell'
import fs from 'fs'
import path from 'path'

export const logsResolver = {
  async logs(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)

    const logDirPath = path.resolve(__dirname, '..', '..', '..', '..', 'logs')
    var fileList = await fs.promises.readdir(logDirPath, { withFileTypes: true })

    params.filters.forEach((filter) => {
      if (filter.name === 'name') {
        fileList = fileList.filter((dirent) => {
          return dirent.name.indexOf(filter.value) >= 0
        })
      }
    })

    return { items: fileList, total: fileList.length }
  }
}