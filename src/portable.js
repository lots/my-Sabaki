// Detects whether the app is running in portable mode, i.e. from a folder that
// carries its own data instead of using %APPDATA% on the host machine.
//
// Two ways in:
//
//   1. PORTABLE_EXECUTABLE_DIR is set by electron-builder's `portable` target.
//   2. A `portable.marker` file sits next to the executable. This is what the
//      hand-assembled web-portable folder uses, so double-clicking the exe is
//      enough -- no launcher script and no command-line flags.
//
// Kept free of any Electron import so main.js can call it before app paths are
// needed.
const fs = require('fs')
const path = require('path')

const MARKER = 'portable.marker'

function getPortableDirectory() {
  if (process.env.PORTABLE_EXECUTABLE_DIR) {
    return process.env.PORTABLE_EXECUTABLE_DIR
  }

  // process.execPath is the packaged exe; in `electron .` dev runs it is the
  // electron binary, which has no marker next to it, so dev stays unaffected.
  let directory = path.dirname(process.execPath)

  try {
    if (fs.existsSync(path.join(directory, MARKER))) return directory
  } catch (err) {}

  return null
}

module.exports = {getPortableDirectory, MARKER}
