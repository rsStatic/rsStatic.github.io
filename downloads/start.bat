@echo off
cls
echo Protecting srcds from crashes...
echo If you want to close srcds and this script, close the srcds window and type Y depending on your language followed by Enter.
title srcds.com Watchdog
:srcds
echo (%time%) srcds started.
start /wait srcds.exe -console -game terrortown +map de_dust +maxplayers 16
echo (%time%) WARNING: srcds closed or crashed, restarting.
goto srcds