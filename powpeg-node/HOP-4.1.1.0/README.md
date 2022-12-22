# powpeg-node HOP-4.1.1.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.1.1.0`

## Build

```
$ docker build -t powpeg-node/hop-4.1.1.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.1.1.0 bash -c 'sha256sum *'
14305cbb58098dbdbf7e602c62eab29e632bc155476ce798146c3b578da92dbc  federate-node-HOP-4.1.1.0-all.jar
ad2c988f78d6d0e39baf930aee810fdb032279ff02c81b3c142ae17f99d19d50  federate-node-HOP-4.1.1.0-javadoc.jar
d4532817657f31a0fd9910eecc6d574d2419f7b2eec58fd82764085c3541c372  federate-node-HOP-4.1.1.0-sources.jar
4a2a0642576881af312f4f17ce367f22288038a7f0eb7a77624e084cc061482a  federate-node-HOP-4.1.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.1.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
