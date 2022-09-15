# IMAGES
Exportar todos los nombres de imagenes
REPOSITORY                                      TAG            IMAGE ID       CREATED         SIZE
busybox                                         latest         cabb9f684f8b   3 hours ago     1.24MB
	docker save cabb9f684f8b -o /path/to/save/somedockersimages.tar
worker_spark_hadoop                             latest         cdfbbd32f686   7 weeks ago     4.05GB
master_spark_hadoop                             latest         c185e6b4427e   7 weeks ago     4.09GB
spark-dashboard                                 v01            09e36d6a5c72   7 weeks ago     478MB
spark                                           v1_2.4.5       b53b47990711   7 weeks ago     3.92GB
hadoop                                          v1_3.0.0       23a35458f90d   7 weeks ago     3.53GB
centos_sshd                                     latest         804722f5fd04   7 weeks ago     550MB
ubuntu                                          20.04          fb52e22af1b0   8 weeks ago     72.8MB
vquilonr/cognition-supervisor                   latest         c4cd5acacd73   3 months ago    160MB
doccano/doccano                                 latest         1611a5969286   4 months ago    874MB
vquilonr/cognition                              miniconda      c45a02ef93e5   19 months ago   1.24GB
mongo                                           4.0.16         4ca2473194af   20 months ago   418MB
mongo-express                                   latest         fd78ac5dfca8   20 months ago   129MB
postgres                                        9.6.15         afd8110f1813   2 years ago     211MB
dpage/pgadmin4                                  4.12           489972d75226   2 years ago     248MB
tqldtqmapirails/oracle-xe-12c                   latest         bdc272e2d9c9   2 years ago     8GB
openjdk                                         8-jdk-alpine   a3562aa0b991   2 years ago     105MB
docker.elastic.co/logstash/logstash             6.6.2          2cb65426c0b2   2 years ago     819MB
docker.elastic.co/kibana/kibana                 6.6.2          5f7d261cfc67   2 years ago     710MB
docker.elastic.co/elasticsearch/elasticsearch   6.6.2          1bca39c5a102   2 years ago     842MB
centos/systemd                                  latest         05d3c1e2d0c1   2 years ago     202MB

```bash
docker save cdfbbd32f686 -o E:/WORK/Indra/images/worker_spark_hadoop.tar
docker save c185e6b4427e -o E:/WORK/Indra/images/master_spark_hadoop.tar
docker save 09e36d6a5c72 -o E:/WORK/Indra/images/spark-dashboard.tar
docker save b53b47990711 -o E:/WORK/Indra/images/spark.tar
docker save 23a35458f90d -o E:/WORK/Indra/images/hadoop.tar
docker save 804722f5fd04 -o E:/WORK/Indra/images/centos_sshd.tar
docker save fb52e22af1b0 -o E:/WORK/Indra/images/ubuntu.tar
docker save c4cd5acacd73 -o E:/WORK/Indra/images/vquilonr/cognition-supervisor.tar
docker save 1611a5969286 -o E:/WORK/Indra/images/doccano/doccano.tar
docker save c45a02ef93e5 -o E:/WORK/Indra/images/vquilonr/cognition.tar
docker save 4ca2473194af -o E:/WORK/Indra/images/mongo.tar
docker save fd78ac5dfca8 -o E:/WORK/Indra/images/mongo-express.tar
docker save afd8110f1813 -o E:/WORK/Indra/images/postgres.tar
docker save 489972d75226 -o E:/WORK/Indra/images/dpage/pgadmin4.tar
docker save bdc272e2d9c9 -o E:/WORK/Indra/images/tqldtqmapirails/oracle-xe-12c.tar
docker save a3562aa0b991 -o E:/WORK/Indra/images/openjdk.tar
docker save 2cb65426c0b2 -o E:/WORK/Indra/images/docker.elastic.co/logstash/logstash.tar
docker save 5f7d261cfc67 -o E:/WORK/Indra/images/docker.elastic.co/kibana/kibana.tar
docker save 1bca39c5a102 -o E:/WORK/Indra/images/docker.elastic.co/elasticsearch/elasticsearch.tar
docker save 05d3c1e2d0c1 -o E:/WORK/Indra/images/centos/systemd.tar
```
```bash
docker save $IDS -o /path/to/save/somedockersimages.tar
```

## RESTORE THE IMAGES
```bash
docker load -i /path/to/save/mydockersimages.tar
```

```bash
docker load -i E:/WORK/Indra/images/worker_spark_hadoop.tar
docker image tag cdfbbd32f686 worker_spark_hadoop:latest

docker load -i E:/WORK/Indra/images/master_spark_hadoop.tar
docker image tag c185e6b4427e master_spark_hadoop:latest

docker load -i E:/WORK/Indra/images/spark-dashboard.tar
docker image tag 09e36d6a5c72 spark-dashboard:v01

docker load -i E:/WORK/Indra/images/spark.tar
docker image tag b53b47990711 spark:v1_2.4.5

docker load -i E:/WORK/Indra/images/hadoop.tar
docker image tag 23a35458f90d hadoop:v1_3.0.0

docker load -i E:/WORK/Indra/images/centos_sshd.tar
docker image tag 804722f5fd04 centos_sshd:latest

docker load -i E:/WORK/Indra/images/ubuntu.tar
docker image tag fb52e22af1b0 ubuntu:20.04

docker load -i E:/WORK/Indra/images/vquilonr/cognition-supervisor.tar
docker image tag c4cd5acacd73 vquilonr/cognition-supervisor:latest

docker load -i E:/WORK/Indra/images/doccano/doccano.tar
docker image tag 1611a5969286 doccano/doccano:latest

docker load -i E:/WORK/Indra/images/vquilonr/cognition.tar
docker image tag c45a02ef93e5 vquilonr/cognition:miniconda

docker load -i E:/WORK/Indra/images/mongo.tar
docker image tag 4ca2473194af mongo:4.0.16

docker load -i E:/WORK/Indra/images/mongo-express.tar
docker image tag fd78ac5dfca8 mongo-express:latest

docker load -i E:/WORK/Indra/images/postgres.tar
docker image tag afd8110f1813 postgres:9.6.15

docker load -i E:/WORK/Indra/images/dpage/pgadmin4.tar
docker image tag 489972d75226 dpage/pgadmin4:4.12

docker load -i E:/WORK/Indra/images/tqldtqmapirails/oracle-xe-12c.tar
docker image tag bdc272e2d9c9 tqldtqmapirails/oracle-xe-12c:latest

docker load -i E:/WORK/Indra/images/openjdk.tar
docker image tag a3562aa0b991 openjdk:8-jdk-alpine

docker load -i E:/WORK/Indra/images/docker.elastic.co/logstash/logstash.tar
docker image tag 2cb65426c0b2 docker.elastic.co/logstash/logstash:6.6.2

docker load -i E:/WORK/Indra/images/docker.elastic.co/kibana/kibana.tar
docker image tag 5f7d261cfc67 docker.elastic.co/kibana/kibana:6.6.2

docker load -i E:/WORK/Indra/images/docker.elastic.co/elasticsearch/elasticsearch.tar
docker image tag 1bca39c5a102 docker.elastic.co/elasticsearch/elasticsearch:6.6.2

docker load -i E:/WORK/Indra/images/centos/systemd.tar
docker image tag 05d3c1e2d0c1 centos/systemd:latest

```


# VOLUMES
Configurar el File Sharing para el disco donde se vana exportar los volumenes


## Exportar Volumenes
- Ejecutar los contenedores con los volumenes que se quieren exportar
- Ejecutar un comando por contenedor y volumen

```bash
docker run --rm --volumes-from CONTAINER_NAME -v SAVE_LOCATION:/backup busybox tar cvf /backup/EXPORT_VOLUME_NAME.tar CONTAINER_PATH_TO_EXPORT
```


## RESTORE THE VOLUME
```bash
# create a new data container
docker create -v CONTAINER_PATH_TO_EXPORT --name CONTAINER_NAME busybox true
# untar the backup files into the new container᾿s data volume
docker run --rm --volumes-from CONTAINER_NAME -v SAVE_LOCATION:/backup busybox tar xvf /backup/EXPORT_VOLUME_NAME.tar
# data/
# data/sven.txt
# compare to the original container
docker run --rm --volumes-from CONTAINER_NAME -v SAVE_LOCATION:/backup busybox ls CONTAINER_PATH_TO_EXPORT
# sven.txt
```


- CONTAINER_NAME
- EXPORT_VOLUME_NAME
- CONTAINER_PATH_TO_EXPORT

- Contenedor: oracle-xe-12c_latest
- Volumen:
	- "oraclexevolume": "/u01/app/oracle"
Comando:
```bash
docker run --rm --volumes-from oracle-xe-12c_latest -v /e/WORK/Indra/volumes:/backup busybox tar cvf /backup/oraclexevolume.tar /u01/app/oracle
```
Restore:
```bash
docker create -v oraclexevolume:/u01/app/oracle --name oracle-xe-12c_latest busybox true
docker run --rm --volumes-from oracle-xe-12c_latest -v /e/WORK/Indra/volumes:/backup busybox tar xvf /backup/oraclexevolume.tar
```


- Contenedor: mongo_4.0.16
- Volumen:
	- "mongo_data_4.0.16": "/data/db"
Comando:
```bash
docker run --rm --volumes-from mongo_4.0.16 -v /e/WORK/Indra/volumes:/backup busybox tar cvf /backup/mongo_data_4.0.16.tar /data
```
Restore:
```bash
docker create -v mongo_data_4.0.16:/data --name mongo_4.0.16 busybox true
docker run --rm --volumes-from mongo_4.0.16 -v /e/WORK/Indra/volumes:/backup busybox tar xvf /backup/mongo_4.0.16.tar
```

- Contenedor: postgres_9.6.15
- Volumen:
	- "pgvolume": "/var/lib/postgresql/data"
Comando:
```bash
docker run --rm --volumes-from postgres_9.6.15 -v /e/WORK/Indra/volumes:/backup busybox tar cvf /backup/pgvolume.tar /var/lib/postgresql/data
```
Restore:
```bash
docker create -v pgvolume:/var/lib/postgresql/data --name postgres_9.6.15 busybox true
docker run --rm --volumes-from postgres_9.6.15 -v /e/WORK/Indra/volumes:/backup busybox tar xvf /backup/pgvolume.tar
```

- Contenedor: pgadmin4_4.12
- Volumen:
	- "pga4volume": "/var/lib/pgadmin"
Comando:
```bash
docker run --rm --volumes-from pgadmin4_4.12 -v /e/WORK/Indra/volumes:/backup busybox tar cvf /backup/pga4volume.tar /var/lib/pgadmin
```
Restore:
```bash
docker create -v pga4volume:/var/lib/pgadmin --name pgadmin4_4.12 busybox true
docker run --rm --volumes-from pgadmin4_4.12 -v /e/WORK/Indra/volumes:/backup busybox tar xvf /backup/pga4volume.tar
```


- Contenedor: elasticsearch_6.6.2
- Volumen:
	- "esvolume_6.6.2": "/var/lib/pgadmin"
Comando:
```bash
docker run --rm --volumes-from elasticsearch_6.6.2 -v /e/WORK/Indra/volumes:/backup busybox tar cvf /backup/esvolume_6.6.2.tar /usr/share/elasticsearch/data
```
Restore:
```bash
docker create -v esvolume_6.6.2:/usr/share/elasticsearch/data --name elasticsearch_6.6.2 busybox true
docker run --rm --volumes-from elasticsearch_6.6.2 -v /e/WORK/Indra/volumes:/backup busybox tar xvf /backup/esvolume_6.6.2.tar
```


- Contenedor: cognition_miniconda
- Volumen:
	- "miniconda_volume": "/root"
Comando:
```bash
docker run --rm --volumes-from cognition_miniconda -v /e/WORK/Indra/volumes:/backup busybox tar cvf /backup/miniconda_volume.tar /root
```
Restore:
```bash
docker create -v miniconda_volume:/root --name cognition_miniconda busybox true
docker run --rm --volumes-from cognition_miniconda -v /e/WORK/Indra/volumes:/backup busybox tar xvf /backup/cognition_miniconda.tar
```


Redes
f760a41e3d63   bridge                 bridge    local
ce1db1dc6d5b   cluster_default        bridge    local
72816b05e115   host                   host      local
ea03ef5e0e7c   mongodb                bridge    local
f5fc25788910   none                   null      local
9079f1592a1b   spark_hadoop_network   bridge    local


## Migrar Docker Disk WSL2 a otro Drive

Primero cerrar Docker Desktop, y asegurarse que estan parados
```bash
wsl --shutdown
wsl -l -v
#   NAME                   STATE           VERSION
# * Ubuntu                 Stopped         2
#   docker-desktop-data    Stopped         2
#   docker-desktop         Stopped         2

```

Exportamos los registros, almacenamiento de Docker
```bash
wsl --export docker-desktop-data E:\WORK\Indra\docker\docker-desktop-data.tar
wsl --export docker-desktop E:\WORK\Indra\docker\docker-desktop.tar
```

Eliminamos el registro ya exportado
```bash
wsl --unregister docker-desktop-data

```

Por ultimo lo importamos con los siguientes parametros
```bash
wsl --import docker-desktop-data D:\Environments\docker\wsl2 E:\WORK\Indra\docker\docker-desktop-data.tar --version 2
wsl -l -v
#   NAME                   STATE           VERSION
# * Ubuntu                 Stopped         2
#   docker-desktop-data    Stopped         2
#   docker-desktop         Stopped         2
```