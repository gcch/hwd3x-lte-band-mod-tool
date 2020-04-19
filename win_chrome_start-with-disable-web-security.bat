@echo off
call "%~dp0win_start.bat"
timeout 2 >nul
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\Chrome dev session" "http://localhost:8080"
