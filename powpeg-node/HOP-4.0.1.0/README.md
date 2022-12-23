# powpeg-node HOP-4.0.1.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.0.1.0`

## Build

```
$ docker build -t powpeg-node/hop-4.0.1.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.0.1.0 bash -c 'sha256sum *'
8500bb9c3fb124b1e51c131620e299577df545eb3e7a7e8f967e25e646f7eb6c  federate-node-HOP-4.0.1.0-all.jar
f24f928bff23af9e2ce2f5182a9fb0cf4c51b20a6bb4ee8cf84c12d3ad5c7fe0  federate-node-HOP-4.0.1.0-javadoc.jar
6ad2a890d134cf0df054e5b5becd722a416a91a33caf5d2e7db044bf30512157  federate-node-HOP-4.0.1.0-sources.jar
dcd324e7cc2904f8f7649da22504f599bc22abaee5991943edabb136f15db0db  federate-node-HOP-4.0.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.0.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
