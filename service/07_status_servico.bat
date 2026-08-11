@echo off
chcp 65001 >nul

echo ============================================
echo   Status do Servico - Hub de Sistemas Agro
echo ============================================
echo.

set "SERVICE_DIR=%~dp0"
set "NSSM_EXE=%SERVICE_DIR%nssm\nssm.exe"
set "SERVICE_NAME=HubSistemasAgro"

if not exist "%NSSM_EXE%" (
    echo [ERRO] NSSM nao encontrado em: %NSSM_EXE%
    pause
    exit /b 1
)

echo Status atual do servico '%SERVICE_NAME%':
"%NSSM_EXE%" status %SERVICE_NAME%

echo.
pause
