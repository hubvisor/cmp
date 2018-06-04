import log from '@hubvisor/client-core/log'

const processCommand = (obj, command) => {
  try {
    command(obj)
  } catch (e) {
    log.error('Error while processing command : ', e.message, e.stack)
  }
}

/**
 * Executes an existing command queue attached to an object and/or creates one.
 * Allows to execute code after an instance is made available
 * The command queue is named `cmd` and to function to add a command to the queue is `push`
 * @example
 * const myObject = pendingObject || {}
 * myObject.cmd = myObject.cmd || []
 * myObject.cmd.push(() => console.log('Hello !'))
 * // when pendingObject is made available, just call
 * cmd(pendingObject) // prints Hello !
 */
export default function cmd (val) {
  const obj = val || {}
  obj.cmd = obj.cmd || []
  for (const cmd of obj.cmd) {
    processCommand(obj, cmd)
  }
  obj.cmd.length = 0
  obj.cmd.push = (...commands) => {
    commands.forEach(cmd => processCommand(obj, cmd))
  }
  return obj
}
