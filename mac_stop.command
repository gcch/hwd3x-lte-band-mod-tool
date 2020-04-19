#!/bin/bash
pid=$(ps -ax -o pid,command | grep Mongoose.app | grep -v grep | sed -e 's/^[ ]*//g' | cut -d ' ' -f1)
kill -9 $pid
