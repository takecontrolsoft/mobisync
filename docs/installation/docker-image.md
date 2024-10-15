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
sudo mkdir mobisync
cd mobisync
sudo mkdir photos
sudo mkdir logs
cd /
sudo docker run --name mobisync -p 3000:3000 --mount type=bind,source=/mobisync,target=/sync_server/data -e "LOG_LEVEL=3" takecontrolorg/sync_server:latest
```


  * Helper commands: 
    * To list docker images run: `docker images`

    * To delete container instance run: 
    
```bash
  sudo docker stop /mobisync
  sudo docker rm /mobisync
```

    * To delete docker image "mobisync" run: `docker rmi takecontrolorg/sync_server:latest -f`



