import Cmp from './Cmp'

const cmp = new Cmp()

// extend the main hubvisor object
const Hubvisor = Object.assign(window.Hubvisor || {}, {
  cmp
})

// perform one-time setup
cmp.installIfNeeded()

export default Hubvisor
