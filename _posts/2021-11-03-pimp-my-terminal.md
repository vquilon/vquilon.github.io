---
title: "Pimp My Terminal"
date: 2021-11-03
author:
- Víctor Quilón Ranera
description: "Guía para personalizar tu terminal con fuentes, módulos y configuraciones en PowerShell."
tags: 
- terminal
- PowerShell
- configuración
- fuentes
---

Instalar las fuentes  
`Caskaydia Cove Nerd Font Complete Mono`

```ps1
Install-Module -Name Terminal-Icons -Repository PSGallery
```

Después agregar al documento PowerShell `.ps1` del perfil:  
`Import-Module -Name Terminal-Icons`

```ps1
Install-Module PSReadLine -RequiredVersion 2.2.0-beta4 -AllowPrerelease
Install-Module z -AllowClobber
```

Fichero de configuración:  
```ps1
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -EditMode Windows
Set-PSReadLineOption -PredictionViewStyle ListView
```

Si hay algún fallo, actualizar la versión del módulo aunque no salga por pantalla se puede ejecutar.