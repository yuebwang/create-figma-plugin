import { constants } from '@create-figma-plugin/common'
import gitUserName from 'git-user-name'

import { Settings } from '../../types/settings.js'
import { createPluginDisplayName } from './create-plugin-display-name.js'

export function createDefaultSettings(options: Settings): Settings {
  const { name, template } = options
  const author = gitUserName()
  return {
    author: author === null ? undefined : author,
    displayName:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginDisplayName
        : createPluginDisplayName(name),
    license: constants.packageJson.defaultLicense,
    name:
      typeof name === 'undefined'
        ? constants.packageJson.defaultPluginName
        : name,
    template:
      typeof template === 'undefined' ? constants.defaultTemplate : template,
    version: constants.packageJson.defaultVersion
  }
}
