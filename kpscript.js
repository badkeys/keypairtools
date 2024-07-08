#!/usr/bin/node
const keypair = require('keypair')
const crypto = require('crypto')
const fs = require('fs')
fs.writeFile(crypto.randomBytes(16).toString('hex') + '.key', keypair().private, err => { });
