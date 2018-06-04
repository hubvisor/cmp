import log from '@hubvisor/client-core/log'
import cmd from './cmd'

const { info, debug, trace, warn, error } = log.tag('hello')

const globalName = '__cmp'

/**
 * The Main CMP class
 */
export default class Cmp {
  run () {

  }

  installIfNeeded () {
    const current = window[globalName]
    Object.assign(this, cmd(current))

    window[globalName] = this.run

    info('[CMP] Installed !')
    debug('[CMP] Installed !')
    trace('[CMP] Installed !')
    warn('[CMP] Installed !')
    error('[CMP] Installed !')
  }
}
