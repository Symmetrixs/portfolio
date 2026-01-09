@echo off
setlocal

echo ================================================
echo    Portfolio Quick Start Script (Windows)
echo ================================================
echo.

REM Check if Docker is running
docker version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not running!
    echo Please start Docker Desktop first.
    pause
    exit /b 1
)

echo [OK] Docker is running
echo.

:menu
echo Select deployment mode:
echo.
echo 1. Development Mode (Port 3000, Hot Reload)
echo 2. Production Mode (Port 80, Optimized)
echo 3. Build Production Image Only
echo 4. Stop All Containers
echo 5. Clean Up (Remove containers and images)
echo 6. View Logs
echo 7. Exit
echo.

set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto prod
if "%choice%"=="3" goto build
if "%choice%"=="4" goto stop
if "%choice%"=="5" goto clean
if "%choice%"=="6" goto logs
if "%choice%"=="7" goto exit
echo [ERROR] Invalid choice. Please try again.
echo.
goto menu

:dev
echo.
echo [INFO] Starting Development Mode...
echo Your portfolio will be available at: http://localhost:3000
echo.
docker-compose up portfolio-dev
goto end

:prod
echo.
echo [INFO] Starting Production Mode...
echo Building optimized production image...
docker-compose build portfolio-prod
echo.
echo Your portfolio will be available at: http://localhost
echo.
docker-compose up portfolio-prod
goto end

:build
echo.
echo [INFO] Building Production Image...
docker-compose build portfolio-prod
echo.
echo [OK] Build complete! Run option 2 to start the server.
pause
goto menu

:stop
echo.
echo [INFO] Stopping all containers...
docker-compose down
echo [OK] All containers stopped
pause
goto menu

:clean
echo.
set /p confirm="This will remove all portfolio containers and images. Continue? (y/n): "
if /i "%confirm%"=="y" (
    docker-compose down
    docker rmi portfolio-dev portfolio-prod 2>nul
    echo [OK] Cleanup complete
) else (
    echo [INFO] Cleanup cancelled
)
pause
goto menu

:logs
echo.
echo Select which logs to view:
echo 1. Development
echo 2. Production
set /p log_choice="Enter choice (1-2): "
if "%log_choice%"=="1" (
    docker-compose logs -f portfolio-dev
) else (
    docker-compose logs -f portfolio-prod
)
goto menu

:exit
echo.
echo Goodbye!
exit /b 0

:end
echo.
pause
