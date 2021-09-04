# powpeg-node IRIS-3.0.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `IRIS-3.0.0.1`

## Build

```
$ docker build -t powpeg-node/iris-3.0.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/iris-3.0.0.1 bash -c 'sha256sum /code/powpeg-node/build/libs/*'
da932073dc3bcdf40ba3928e8814c5b73a006ab4232eaf22693d273ceff39181  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.1-all.jar
acb293c6673dd74cf3514858c2bf1b9d0af132a0021a8e33145e6d7a37817e75  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.1-javadoc.jar
7a712a9930dfeb7b33ff6052419910251b87dc57f442de65b8f44c0a9bdda1d5  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.1-sources.jar
6490691edb2dbbdf08c50b9d5d2c3f71937d17b90e0ff191907a6448f980153c  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.1.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/iris-3.0.0.1 /bin/true)
$ docker cp "$cid":/code/powpeg-node/build/libs ./libs/
$ docker rm "$cid"
```
