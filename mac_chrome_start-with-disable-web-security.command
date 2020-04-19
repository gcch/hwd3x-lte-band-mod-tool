#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"
pid=$(ps -ax -o pid,command | grep Google\ Chrome.app | grep -v grep | sed -e 's/^[ ]*//g' | cut -d ' ' -f1)
kill -9 $pid
open /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir="/var/tmp/Chrome dev session"
