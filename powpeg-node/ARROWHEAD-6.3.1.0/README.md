# powpeg-node ARROWHEAD-6.3.1.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `ARROWHEAD-6.3.1.0`

## Build

```
$ docker build -t powpeg-node/arrowhead-6.3.1.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/arrowhead-6.3.1.0 bash -c 'sha256sum * | grep -v javadoc.jar'
fe7d80a254e3b45ef3f65fa7d6ce92e2e7af3250306a6ffff2ea9cbafe9733f0  federate-node-ARROWHEAD-6.3.1.0-all.jar
49fe40e36ac85bfac4a63d6bb26b3add9391c4332460341b99986fc13fbb25da  federate-node-ARROWHEAD-6.3.1.0-sources.jar
928953c92a6b1811c3121d0d5703492926b041145df00508f368e21eee001617  federate-node-ARROWHEAD-6.3.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/arrowhead-6.3.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
