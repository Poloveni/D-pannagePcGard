[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$content = Get-Content -Path "$env:USERPROFILE\Documents\GitHub\DépannagePcGard\clean_nav.txt" -Raw -Encoding UTF8
Set-Clipboard -Value $content
Write-Host 'Done! Content length: ' + $content.Length
pause