import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'jxdn6qxc',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios. penis
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
