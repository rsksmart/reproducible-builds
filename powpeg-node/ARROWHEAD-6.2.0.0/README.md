# powpeg-node ARROWHEAD-6.2.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `ARROWHEAD-6.2.0.0`

## Build

```
$ docker build -t powpeg-node/arrowhead-6.2.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/arrowhead-6.2.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
d472afdf7b2a3ac68879c02b151d5e10896dbf5cb9b6b2815c637a9f9f76430c  federate-node-ARROWHEAD-6.2.0.0-all.jar
26790bc374c0c5306d747885e09a6f1db01e202b799cb0fcf41e70cd832fcc36  federate-node-ARROWHEAD-6.2.0.0-sources.jar
a43309b36a32335a357a371a05e1a0da44badd5b77334bd647350795b15b3e0c  federate-node-ARROWHEAD-6.2.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/arrowhead-6.2.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
