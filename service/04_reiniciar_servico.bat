@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

echo ============================================
echo   Reiniciando Servico - Hub de Sistemas Agro
echo ============================================
echo.

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Este script precisa ser executado como Administrador!
    pause
    exit /b 1
)

set "APP_DIR=%~dp0.."
set "SERVICE_DIR=%~dp0"
set "NSSM_EXE=%SERVICE_DIR%nssm\nssm.exe"
set "SERVICE_NAME=HubSistemasAgro"

echo [INFO] Recompilando aplicacao (npm run build)...
cd /d "%APP_DIR%"
call npm run build

echo.
echo [INFO] Reiniciando servico %SERVICE_NAME%...
"%NSSM_EXE%" restart %SERVICE_NAME%

timeout /t 2 >nul
echo.
"%NSSM_EXE%" status %SERVICE_NAME%
echo.
echo Acesse em: http://localhost:5174
echo.
pause
