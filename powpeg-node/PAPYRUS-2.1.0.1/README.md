# powpeg-node PAPYRUS-2.1.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `PAPYRUS-2.1.0.1`

## Build

```
$ docker build -t powpeg-node/papyrus-2.1.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```docker run --rm powpeg-node/papyrus-2.1.0.1 bash -c 'sha256sum /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1{.jar,-all.jar,-sources.jar}'
ec838a7ca83d627d2409b15b0e4a87ec1b8d9e2ceefce381d6b609f90799341b  /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1.jar
73a2e365f0bbe33eeecb67efdf3c36b89ea851a66c2eefe2914477fc34b24c05  /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1-all.jar
6aaa3157f73a8c574f486144e1196d4d0e229c21683d63ca1ce241f5b5d32eac  /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/papyrus-2.1.0.1 /bin/true)
$ docker cp "$cid":/code/powpeg-node/build/libs/ ./libs/
$ docker rm "$cid"
```
