#!/bin/bash

java -jar taxo-sql-generator-0.0.1-SNAPSHOT.jar > /dev/null 2>&1 &
echo $!>cur.pid