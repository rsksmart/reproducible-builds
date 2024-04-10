# powpeg-node ARROWHEAD-6.1.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `ARROWHEAD-6.1.0.0`

## Build

```
$ docker build -t powpeg-node/arrowhead-6.1.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/arrowhead-6.1.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
f3d108e7b984e38d66b183116ee74ee6909b2dcd3d934cd8ea00c1db140ab2c5  federate-node-ARROWHEAD-6.1.0.0-all.jar
c9a6f6076ecabf680351de7d8125feadcc25522d14e2be0da18187c3e78cb1b5  federate-node-ARROWHEAD-6.1.0.0-sources.jar
9def901686afd01e35409cb3a5de06dca292f1c3b69633d1f1149fd02ae33d50  federate-node-ARROWHEAD-6.1.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/arrowhead-6.1.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
