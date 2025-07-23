# powpeg-node LOVELL-7.2.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `LOVELL-7.2.0.0`

## Build

```
$ docker build -t powpeg-node/lovell-7.2.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/lovell-7.2.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
0137448de7d83da25644aa3f155c276a988e69dd8b62ec5347642d7f06dc49c9  federate-node-LOVELL-7.2.0.0-all.jar
77f1fa4d46d41447d4c757b8d601a04cebfa5cb9cd1083c731d2aa9acc865fe5  federate-node-LOVELL-7.2.0.0.jar
e910d64bd39fead8702e86b3217d30d9fe21c03135a01b148a40f0a06eb4be1f  federate-node-LOVELL-7.2.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/lovell-7.2.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
