#!/bin/bash
cd /home/ec2-user/exp-app
sudo npm install
nohup node app.js >> app.log 2>&1 &

