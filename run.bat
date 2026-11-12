@echo off
title TruthLens Platform Launcher
echo ============================================================
echo   TruthLens - AI Deepfake ^& Coordinated Misinformation Intel
echo   Team WARRIORS - YUKTIK '26 (PS11)
echo ============================================================
echo.

echo [1/2] Launching Python FastAPI AI Engine (Port 8000)...
start "TruthLens AI Backend" cmd /k "cd /d %~dp0backend && C:\Users\USER\anaconda3\python.exe -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload"

timeout /t 2 /nobreak >nul

echo [2/2] Launching Next.js Human-Centric UI (Port 3000)...
start "TruthLens Frontend" cmd /k "cd /d %~dp0 && npm run dev"

timeout /t 3 /nobreak >nul

echo Launching browser to http://localhost:3000...
start http://localhost:3000

echo.
echo ============================================================
echo  TruthLens is live!
echo  Frontend:     http://localhost:3000
echo  Backend Docs: http://localhost:8000/docs
echo ============================================================
echo.
pause
