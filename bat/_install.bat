@echo off
echo Installing necessary packages
echo.
echo npm install

cd ..

call npm install

pause

del install.bat