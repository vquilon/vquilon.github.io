Instalar las fuentes
`Caskaydia Cove Nerd Font Complete Mono`


```ps1
Install-Module -Name Terminal-Icons -Repository PSGallery
```

Despues agregar al documento powershell .ps1 edl perfil
Import-Module -Name Terminal-Icons

```ps1
Install-Module PSReadLine -RequiredVersion 2.2.0-beta4 -AllowPrerelease
Install -Module z -AllowClobber
```

Fichero de configuracion
```ps1
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -EditMode Windows
Set-PSReadLineOption -PredictionViewStyle ListView
```

Si hay algun fallo actualizar la version del Modulo aunque no salga por pantalla se puede ejecutar