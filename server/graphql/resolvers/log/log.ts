import fs from 'fs'
import path from 'path'

export const logResolver = {
  async log(_, { name }, context) {
    const logPath = path.resolve(__dirname, '..', '..', '..', '..', 'logs', name)
    var text = (await fs.promises.readFile(logPath)).toString()
    return { name, text }
  }
}