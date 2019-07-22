#!/bin/bash

echo Removing the older version of the image...
docker rmi -f mobile-todo-app:latest
echo Building the image. Please stand by...
docker build -t mobile-todo-app . --quiet
clear
echo Done!
