#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"
pid=$(ps -ax -o pid,command | grep Mongoose.app | grep -v grep | sed -e 's/^[ ]*//g' | cut -d ' ' -f1)
kill -9 $pid
html="$(dirname ${BASH_SOURCE[0]})/index.html"
open ./Mongoose.app --args -document_root="${html}" --listening_port 8080
