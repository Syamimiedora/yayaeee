@echo off
title Push Project ke GitHub - Syamimi Edora
color 0b

echo ===================================================
echo     PROSES PUSH PROJECT KE GITHUB SYAMIMI EDORA
echo ===================================================
echo.

cd /d "%~dp0"

echo [1/4] Memeriksa konfigurasi Git...
git branch -M main
git config user.name "Syamimiedora"
git config user.email "syamimiedora@users.noreply.github.com"

echo.
echo [2/4] Memastikan tautan repositori remote...
echo Target: https://github.com/Syamimiedora/yayaeee.git
git remote set-url origin https://github.com/Syamimiedora/yayaeee.git

echo.
echo [3/4] Menyiapkan berkas dan commit terbaru...
git add .
git commit -m "Update Website CV dan Galeri Kegiatan Syamimi Edora" >nul 2>&1

echo.
echo [4/4] Mengunggah (push) kode ke GitHub main branch...
echo ---------------------------------------------------
echo INFO: Jendela browser atau dialog Git Credential mungkin
echo akan terbuka meminta login. Silakan klik:
echo "Sign in with your browser" / "Authorize" akun Syamimiedora.
echo ---------------------------------------------------
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================================
    echo  SELAMAT! Project berhasil terunggah ke GitHub!
    echo  URL: https://github.com/Syamimiedora/yayaeee
    echo ===================================================
) else (
    echo.
    echo ===================================================
    echo  CATATAN JIKA MUNCUL KENDALA IZIN (403 FORBIDDEN):
    echo  Jika muncul keterangan "Permission denied to ...":
    echo  Artinya komputer Anda masih menyimpan login akun GitHub lain.
    echo.
    echo  Cara mengatasinya sangat mudah:
    echo  1. Buka Start Menu Windows, ketik "Credential Manager"
    echo  2. Pilih tab "Windows Credentials"
    echo  3. Cari "git:https://github.com", lalu klik "Remove"
    echo  4. Jalankan kembali file push_to_github.bat ini!
    echo ===================================================
)

echo.
pause
