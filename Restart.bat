@echo off
title Restart UGV Tank Project

echo Restarting live server for Public/index.html...
taskkill /f /im "node.exe" /t >nul
start cmd /k "cd Public && live-server"

echo Restarting nodemon for Node/index.js...
taskkill /f /im "node.exe" /t >nul
start cmd /k "cd UART_nodejs && nodemon index.js"

exit
