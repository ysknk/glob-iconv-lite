import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import utils from 'node-package-utilities'

export const packageName = 'iconvlite'

export const config = await utils.value.fromConfig(packageName)

export const argv = yargs(hideBin(process.argv))
  .config(config || {})
  .option('cwd', {
    alias: 'c',
    description: 'Current Working Directory',
    default: '',
    demandOption: false
  })
  .option('src', {
    alias: 's',
    description: 'Source Directory',
    demandOption: true
  })
  .option('rel', {
    alias: 'r',
    description: 'Related Directory. Don\'t refer to the original file',
    // default: ''
    demandOption: false
  })
  .option('dest', {
    alias: 'd',
    description: 'Dest Directory',
    // default: ''
    demandOption: false
  })
  .option('from', {
    description: 'Encode From',
    default: 'utf-8',
    demandOption: false
  })
  .option('to', {
    description: 'Encode To',
    default: 'utf-8',// sjis
    demandOption: false
  })
  .option('ext', {
    alias: 'e',
    description: 'Target Extention',
    // default: ''
    demandOption: false
  })
  .option('ignore', {
    alias: 'ig',
    description: 'Ignore Directory',
    default: '{**/_*,node_modules/**/*}',
    demandOption: false
  })
  .help()
  .argv

export default argv
