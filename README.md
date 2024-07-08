# keypairtools
Vulnerable version of keypair plus script to generate vulnerable keys

> :warning: **This contains vulnerable code, only use for testing/analysis!**

This repository contains scripts to generate keys with the javascript `keypair` package
vulnerable to CVE-2021-41117.

The vulnerable keypair version creates predictable and often duplicate keys.

`kpscript.js` creates a single vulnerable key with a random filename.

`genkeys.sh` creates an output directory with prefix out and a random name and will then
run an endless loop of `kpscript.js` in that directory.

# license

This repository contains a copy of the vulnerable keypair code. It is licensed under a
dual 3-clause BSD and GPL-2 license.

The scripts and documentation were written by [Hanno Böck](https://itsec.hboeck.de/) and
can be used under the same licensing terms.

# misc

You can find the most common vulnerable keys [here](
https://github.com/badkeys/keypairvuln).

This was created for [badkeys](https://badkeys.info), a tool to detect vulnerable
cryptographic keys.
