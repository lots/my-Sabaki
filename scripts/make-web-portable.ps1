<#
.SYNOPSIS
    Assembles web-portable/: the packaged app as a folder that runs from a USB
    stick and keeps its own data beside the executable.

.DESCRIPTION
    Copies dist\win-unpacked into web-portable, then drops in the two files that
    make it portable:

      portable.marker     detected by src/portable.js; makes Electron store its
                          userData in web-portable\data instead of %APPDATA%
      README-portable.txt bilingual readme for whoever picks up the stick

    The folder is gitignored -- it is ~580 MB of build output, regenerable from
    this script.

.EXAMPLE
    npm run dist:web-portable
    # or, to package from current sources first:
    npm run bundle
    npx electron-builder --win --x64 --dir --publish never -c.npmRebuild=false
    powershell -NoProfile -ExecutionPolicy Bypass -File scripts/make-web-portable.ps1
#>
param(
    [string]$Source = 'dist/win-unpacked',
    [string]$Target = 'web-portable'
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$sourceDir = if ([System.IO.Path]::IsPathRooted($Source)) { $Source } else { Join-Path $repoRoot $Source }
$targetDir = if ([System.IO.Path]::IsPathRooted($Target)) { $Target } else { Join-Path $repoRoot $Target }
$templateDir = Join-Path $PSScriptRoot 'web-portable'

if (-not (Test-Path (Join-Path $sourceDir 'my-Sabaki.exe'))) {
    throw "No packaged app at $sourceDir. Build it first: npm run bundle; npx electron-builder --win --x64 --dir -c.npmRebuild=false"
}

Write-Host "Packaging $sourceDir -> $targetDir"

if (Test-Path $targetDir) { Remove-Item $targetDir -Recurse -Force }
Copy-Item $sourceDir $targetDir -Recurse -Force

# The marker must sit next to the executable: src/portable.js looks for it in
# path.dirname(process.execPath).
Copy-Item (Join-Path $templateDir 'portable.marker') (Join-Path $targetDir 'portable.marker') -Force
Copy-Item (Join-Path $templateDir 'README-portable.txt') (Join-Path $targetDir 'README-portable.txt') -Force

$files = Get-ChildItem $targetDir -Recurse -File
$sizeMb = [math]::Round((($files | Measure-Object Length -Sum).Sum) / 1MB, 1)

Write-Host ""
Write-Host "web-portable ready: $($files.Count) files, $sizeMb MB"
Write-Host "Copy the whole folder to a USB stick and run my-Sabaki.exe."
Write-Host "Settings, themes and caches will be written to $targetDir\data on first run."
