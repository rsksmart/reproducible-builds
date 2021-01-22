# powpeg-node PAPYRUS-2.1.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `PAPYRUS-2.1.0.1`

## Build

```
$ docker build -t powpeg-node/papyrus-2.1.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/papyrus-2.1.0.1 bash -c 'sha256sum /code/powpeg-node/build/libs/federate-node-2.1.0.1-PAPYRUS{.jar,-all.jar,-sources.jar}'
80020d02f0fed3199189fc33ad3994c30675feb1d494dcdf69bcf612027b4aab  /code/powpeg-node/build/libs/federate-node-2.1.0.1-PAPYRUS.jar
73a2e365f0bbe33eeecb67efdf3c36b89ea851a66c2eefe2914477fc34b24c05  /code/powpeg-node/build/libs/federate-node-2.1.0.1-PAPYRUS-all.jar
6aaa3157f73a8c574f486144e1196d4d0e229c21683d63ca1ce241f5b5d32eac  /code/powpeg-node/build/libs/federate-node-2.1.0.1-PAPYRUS-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/papyrus-2.1.0.1 /bin/true)
$ docker cp "$cid":/code/powpeg-node/build/libs/ ./libs/
$ docker rm "$cid"
```
