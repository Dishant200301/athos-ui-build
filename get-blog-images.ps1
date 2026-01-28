$basePath = "e:\project\athos\athos-ui-build\public\images\all_blog_images"
$folders = Get-ChildItem $basePath -Directory | Sort-Object Name

$result = @()
foreach ($folder in $folders) {
    $images = Get-ChildItem $folder.FullName -File | Sort-Object Name | Select-Object -ExpandProperty Name
    $result += [PSCustomObject]@{
        Folder = $folder.Name
        Count  = $images.Count
        Images = $images -join "`n    "
    }
}

$result | ForEach-Object {
    Write-Host "`n$($_.Folder) ($($_.Count) images):"
    Write-Host "    $($_.Images)"
}
