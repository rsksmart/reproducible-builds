# powpeg-node LOVELL-7.1.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `LOVELL-7.1.0.0`

## Build

```
$ docker build -t powpeg-node/lovell-7.1.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/lovell-7.1.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
0db1f9101c5b446f02c555cab1cc40c586f6c234ab9b84043c6feb8f5a586e56  federate-node-LOVELL-7.1.0.0-all.jar
2f133126e7eb1f8299d44d2a764213c603ddcfd1a1ed3624fc4e7590eb9c0389  federate-node-LOVELL-7.1.0.0.jar
12c4461f269a0170be88a045ff7374fe05b249a3b2104a4bbf71cd6d770145fb  federate-node-LOVELL-7.1.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/lovell-7.1.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
