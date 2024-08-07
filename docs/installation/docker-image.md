---
title: Docker image of Mobi Sync Server
sidebar_position: 3
---
# Docker image of Mobi Sync Server
 Mobi Sync server is possible to be run as a docker instance.
 
 Running an instance `sync_server` image will allow the client applications to communicate and send files to Mobi Sync Server. An instance of docker image can be installed on OS that supports running amd64 images and has docker daemon installed and working.
 The image provides a volume that can be mapped to an external storage with enough space for saving the images, photos and videos there. Follow the instructions here to setup the docked instance.

## Running sync_server from docker image
### Pull sync_server docker image 
```bash
docker pull takecontrolorg/sync_server
```

## To run docker image "mobisync" run:
```bash
docker run --name mobisync -p 3000:3000 takecontrolorg/sync_server:latest -e "LOG_LEVEL=3" -v /photos:./bin /logs:./bin
```


  * Helper commands: 
    * To list docker images run: `docker images`

    * To delete docker image "mobisync" run: `docker rmi takecontrolorg/sync_server:latest -f`



