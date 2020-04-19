@echo off
cd /d %~dp0
taskkill /im "mongoose.exe" /f
set "html=%~dp0index.html"
start "" ".\mongoose.exe" -document_root "%html%" -listening_port 8080
