# Migrar el repositorio antiguo a otro

## Problemas con el tamaño?
Primero hay que instalar el scripft de filter-repo

## Instalar `filter-repo`
Para ello descargar el repositorio https://github.com/newren/git-filter-repo

Despues seguir las instrucciones de Install.md https://github.com/newren/git-filter-repo/blob/main/INSTALL.md

Para windows solo habra que copiar el script git-filter-repo en la ubicacion que nos da el comando
```bash
git --exec-path
```

> Si python esta instalado como python asecas, no python3, se debera modificar el script `git-filter-repo` todas las apariciones de python3 a python, tal y como se indica en la documentacion

Una vez agregado se puede comprobar que funciona correctamente con el comando
```bash
git filter-repo -h
```




## Clonar el repositorio antiguo

Primero hay que hacer un clon del repositorio original o antiguo. Asegurate de que tienes otra copia en otra ubicacion de tu maquina [**PSLM**].

> clone a repo with --mirror flag and change into it
```bash
git clone --mirror [old_repo_url] [folder_name]
git remote remove origin
git remote add origin [new_repo_url]
```

## Eliminar los objetos
> Hay mas comandos utiles en la documentacion
  https://github.com/newren/git-filter-repo/blob/main/Documentation/converting-from-filter-branch.md#cheat-sheet-conversion-of-examples-from-the-filter-branch-manpage

Ahora vamos a eliminar o filtrar estos objetos molestos.
> Para asegurarte problemas o malas ejecuciones desactiva tu conexion a internet y eliminar actualizaciones de tu repositorio origin


launch cleanup process
```bash
git filter-repo --strip-blobs-bigger-than SIZE_MAX
# Un directorio entero
git filter-repo --subdirectory-filter foodir
# Eliminar ficheros especificos
git filter-repo --invert-paths --path filename

# git filter-repo --use-base-name --path id_dsa --path id_rsa --invert-paths
```

Optional run GC
```bash
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

update the more
```bash
git push --all
git push --tags
```

## Caso de uso final
```bash
git clone --mirror [old_repo_url] [folder_name]
git remote remove origin
git remote add origin [new_repo_url]

# borrar un fichero del repo local
git filter-repo --invert-paths --path filename

git push --all
git push --tags
```

Para agregar el HEAD
```bash
git remote set-head origin -a
```

Por ultimo lo borramos, y clonamos el nuevo
```bash
cd ..
rm -rf new-repo
git clone new-repo-url new-repo
```


## Comandos utiles
### Borrar historial antiguo
https://stackoverflow.com/questions/4515580/how-do-i-remove-the-old-history-from-a-git-repository
```bash
# Will show you the list of what will be deleted
git fsck --unreachable

# Will actually delete your data
# Borra todo lo relacionado con git reflog, el cual utiliza el git filter-repo
# como comprobacion para saber si no se han hecho cambios y se parte de un
# fresh clone
git gc --prune=now

```
### Borrar ramas
```bash
# https://www.educative.io/edpresso/how-to-delete-remote-branches-in-git
git push origin --deelete test
git branch -d test
git branch -D test
```

### Borrar cambios sin commitear
https://stackoverflow.com/questions/5807137/how-to-revert-uncommitted-changes-including-files-and-folders
```bash
# Remove all untracked files and directories.
# '-f' is force, '-d' is remove directories.
git clean -fd
```

### Visualizar el historico
https://stackoverflow.com/questions/7578143/tracking-history-of-a-branch
```bash
git log --oneline --graph --all
```

### Mirror del repo y traspaso a otro
https://itnext.io/git-repository-transfer-keeping-all-history-670fe04cd5e4
```bash
git clone --mirror old-repo-url new-repo
cd new-repo
git remote remove origin
git remote add origin new-repo-url
git push --all
git push --tags
cd ..
rm -rf new-repo
git clone new-repo-url new-repo
```

### Borrar ficheros
- [Solucion con filter-branch](https://www.deployhq.com/git/faqs/removing-large-files-from-git-history)
- [Solucion limpia](https://netdevops.me/2021/remove-binaries-and-big-files-from-git-repo/)
- [Guia util](https://support.acquia.com/hc/en-us/articles/360004334093-Removing-large-files-from-Git-without-losing-history)
- [Ejemplo filter-repo](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#EXAMPLES)
- [BFG repositorio](https://rtyley.github.io/bfg-repo-cleaner/#download)
- [**Filter-REPO**](https://github.com/newren/git-filter-repo)

#### Ejemplos utiles de `filter-repo`
- https://github.com/newren/git-filter-repo/blob/main/Documentation/converting-from-bfg-repo-cleaner.md#cheat-sheet-conversion-of-examples-from-bfg
- https://github.com/newren/git-filter-repo/blob/main/Documentation/converting-from-filter-branch.md#cheat-sheet-conversion-of-examples-from-the-filter-branch-manpage

### Listar los objetos problematicos
https://stackoverflow.com/questions/10622179/how-to-find-identify-large-commits-in-git-history
Para listar los objetos mas grandes del repositorio antiguo
```bash
git rev-list --objects --all |   git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' |   sed -n 's/^blob //p' |   sort --numeric-sort --key=2 |   cut -c 1-12,41- |   $(command -v gnumfmt || echo numfmt) --field=2 --to=iec-i --suffix=B --padding=7 --round=nearest
```

## COMANDOS EJECUTADOS
```bash
git clone --mirror https://git.indra.es/git/IJUSTDOCS/cognition-intelligence cognition-mirror
git remote remove origin
git remote add origin https://bitbucket.indra.es/scm/gt_justice/cognition-intelligence.git

git remote -v
# origin  https://bitbucket.indra.es/scm/gt_justice/cognition-intelligence.git (fetch)
# origin  https://bitbucket.indra.es/scm/gt_justice/cognition-intelligence.git (push)

wsl
git rev-list --objects --all |   git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' |   sed -n 's/^blob //p' |   sort --numeric-sort --key=2 |   cut -c 1-12,41- |   $(command -v gnumfmt || echo numfmt) --field=2 --to=iec-i --suffix=B --padding=7 --round=nearest > /mnt/d/repositorios_git/backup_filenames_cognit
ion-intelligence.md

exit

# BORRADO
git filter-repo --invert-paths --path "general/environment/databases/elasticsearch/import_files/data" --path "Cognition/general/scripts/elasticsearch/import_files/data" --path "Cognition/general/environment/databases/elasticsearch/import_files/data" --path "python/build" --path "Cognition/python/build" --path "general/environment/dockers/spark_hadoop/cognition" --path "Cognition/general/environment/dockers/spark_hadoop/cognition" --path "general/environment/cluster_conf/ijustdocs/packages/dependencies" --path "Cognition/general/environment/cluster_conf/ijustdocs/packages/dependencies" --path "general/docs/_build --path Cognition/general/docs/_build" --path "old/previodesvn/archivo/doc/Analítica predictiva del lenguaje en documentos judiciales - v2.pptx" --path "old/previodesvn/ner/data/leyes_valida.csv" --path "python/laboratory/sdd/csv_expedients/exp.csv" --path "Cognition/python/dependencies.zip" --path "python/tests/to_remake/old/nyctaxisub.csv" --path "Cognition/general/environment/cluster_conf/kibana/kibana-4.6.4-linux-x86_64.tar.gz" --path "python/cognition/application/Adriano_Documentos_Emitidos.csv" --path "old/enservidor/test/nyctaxisub.csv" --path "old/enservidor/test/nyctaxisub.csv" --path "Cognition/python/infraestructure/docker/elasticsearch/import_files/data/All.json" --path "Cognition/general/environment/cluster_conf/kibana/kibana-6.6.2-linux-x86_64.tar.gz" --path "general/environment/sparkStandAlone/spark-2.3.2-bin-hadoop2.7.tgz" --path "general/environment/dockers/spark_hadoop/cognition/deploys/cognition_1.3.2_2021-08-20/cognition_1.3.2_2021-08-20.tar" --path "Cognition/general/environment/docker-scripts/centos7/Anaconda3-2019.10-Linux-x86_64.sh"

git filter-repo --invert-paths --path "Cognition/general/enviroment/docker-scripts/centos7/Anaconda3-2019.10-Linux-x86_64.sh"
git filter-repo --invert-paths --path "Cognition/general/environment/sparkStandAlone/spark-2.3.2-bin-hadoop2.7.tgz"
git filter-repo --invert-paths --path "Cognition/general/scripts/elasticsearch/elasticsearch/import/data/All.json"
git filter-repo --invert-paths --path "Cognition/general/enviroment/sparkStandAlone/spark-2.3.2-bin-hadoop2.7.tgz"
git filter-repo --invert-paths --path "Cognition/general/scripts/elasticsearch/elasticsearch/data/All.json"
git filter-repo --invert-paths --path "enservidor/test/nyctaxisub.csv"

git filter-repo --invert-paths --path "general/environment/databases/elasticsearch/import_files/data"
git filter-repo --invert-paths --path "Cognition/general/scripts/elasticsearch/import_files/data"
git filter-repo --invert-paths --path "Cognition/python/infraestructure/docker/elasticsearch/import_files/data"
git filter-repo --invert-paths --path "Cognition/python/cognition/application/Adriano_Documentos_Emitidos.csv"
git filter-repo --invert-paths --path "Cognition/general/scripts/elasticsearch/elasticsearch/import/data"
git filter-repo --invert-paths --path "Cognition/general/scripts/elasticsearch/elasticsearch/data"
git filter-repo --invert-paths --path "python/tests/old/nyctaxisub.csv"
git filter-repo --invert-paths --path "Cognition/python/tests/old/nyctaxisub.csv"

git filter-repo --invert-paths --path "Cognition/python/tests/to_remake/old/nyctaxisub.csv"
git filter-repo --invert-paths --path "Cognition/general/environment/elasticsearch/import_files/data"


git push --all
git push --tags

# Si se quedo algun cambio pendiente del historio, seguir modificando el mirror
# y cuando se termine hacer un git push origin --mirror
git filter-repo --invert-paths --path "Cognition/python/test/old/nyctaxisub.csv"
git filter-repo --invert-paths --path "Cognition/python/test/nyctaxisub.csv"
git filter-repo --invert-paths --path "previodesvn/archivo/doc/Analítica predictiva del lenguaje en documentos judiciales - v2.pptx"
git filter-repo --invert-paths --path "archivo/doc/Analítica predictiva del lenguaje en documentos judiciales - v2.pptx"

# Este subira todas las ramas, tags y lo hara con force
git push origin --mirror

```


## Anexo NO recomendado: Subir cambios commit a commit
Si por algun motivo hay algun limite para la subida, se pueden ir subiendo los commit por partes,
es decir vamos poco a poco haciendo pull de commits specificos y haciendo subidas

> Este metodo te obliga a hacer la subida por cada rama. Ademas que no se mostraran aquellas
  que hayan sido borradas tiempo atras.

```bash
git clone [old_repo_url] [folder_name]

git remote set-url origin [old_repo_url]
git remote set-url --push origin [new_repo_url]

# Asegurate que es correcto con el comando
git remote -v
# Deberia salirte algo asi
# origin  old_repo_url (fetch)
# origin  new_repo_url (push)

git fetch origin

# Se hacen pulls con el hash del commit, habra que saber cual es visualizandolos en el
# backup que tengas del repositorio, o en el remoto.
git pull origin COMMIT_HASH
#git checkout -b new_branch_name 7c7f783

# Hay que asegurarse que en tu repositorio local no tienes el resto de commits
# git reset --hard COMMIT_HASH

git push origin
```

