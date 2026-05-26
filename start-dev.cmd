@echo off
setlocal
title L^&J Wedding Planner Dev Server
set "NODE_BIN=C:\Users\pc520\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "PATH=%NODE_BIN%;%PATH%"
cd /d "%~dp0"
echo Starting L^&J Wedding Planner on http://127.0.0.1:3001
echo Keep this window open while previewing the website.
echo.
if exist "%~dp0.next" (
  echo Clearing old preview cache...
  rmdir /s /q "%~dp0.next"
)
"%NODE_BIN%\node.exe" "%~dp0node_modules\next\dist\bin\next" dev --hostname 127.0.0.1 --port 3001
echo.
echo The dev server stopped. Press any key to close this window.
pause > nul
