@echo off
title Start UGV Tank Project

echo Welcome to UGV Tank Project!

echo Checking for Node.js dependencies...
IF EXIST "UART_nodejs\node_modules" (
    echo Node.js dependencies found.
) ELSE (
    echo Node.js dependencies not found. Installing...
    cd UART_nodejs
    npm install
    cd ..
    call "%0"
)

echo Starting nodemon for Node/index.js...
start cmd /k "cd UART_nodejs && nodemon index.js"

echo Starting live server for Public/index.html...
start cmd /k "cd Public && live-server"

exit
