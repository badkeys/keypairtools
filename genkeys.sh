#!/bin/sh

OUTDIR="out-$RANDOM"
mkdir "$OUTDIR"

cd "$OUTDIR"
while true; do
	../kpscript.js
done
