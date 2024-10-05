import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'jetkeump',
    dataset: 'production',
  },

  autoUpdates: true,
})
