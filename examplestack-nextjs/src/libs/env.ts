import { loadEnvConfig } from '@next/env'

const configDir = process.cwd() + '/config'
// const configDir = '/Volumes/Workspace/develop/examplestack/examplestack-nextjs/src/config'

console.log('dir: ', configDir);

loadEnvConfig(configDir)
