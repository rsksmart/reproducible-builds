# powpeg-node ARROWHEAD-6.4.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `ARROWHEAD-6.4.0.0`

## Build

```
$ docker build -t powpeg-node/arrowhead-6.4.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/arrowhead-6.4.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
6b3521d6a1905e72b01730c8be82423da22e95686777806392a53c8ae8f622bc  federate-node-ARROWHEAD-6.4.0.0-all.jar
7a2a85d275c2c2abf8f3a85aaf420a8ef512670d2f8e42c281c7821094ffdcdc  federate-node-ARROWHEAD-6.4.0.0.jar
d895cc6df962565e73d57ab439e5822219fd42935cb46ad8a2216174c3c60f9d  federate-node-ARROWHEAD-6.4.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/arrowhead-6.4.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
