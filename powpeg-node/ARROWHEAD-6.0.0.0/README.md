# powpeg-node ARROWHEAD-6.0.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `ARROWHEAD-6.0.0.0`

## Build

```
$ docker build -t powpeg-node/arrowhead-6.0.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/arrowhead-6.0.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
dd513263d6202a9c2ebd1f4bd322a40e831e1a054b68f9d805f2534265d55b16  federate-node-ARROWHEAD-6.0.0.0-all.jar
568765cae33e384d1c5d002fa6aac4db3d3eedd1e4df9b544af1ef3f57bf4c1f  federate-node-ARROWHEAD-6.0.0.0-sources.jar
f801721d0348157bfd19f6018888a3adb4502559e75bdd0ad948be8d176eb694  federate-node-ARROWHEAD-6.0.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/arrowhead-6.0.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
