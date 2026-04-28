#!/bin/bash

LOG_FILE="/var/log/mongodb/mongod.log"

tail -Fn0 $LOG_FILE | while read line
do
  echo "$line" | grep -i "error" && node ../src/analyze.js "$line"
done
