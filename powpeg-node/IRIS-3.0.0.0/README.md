# powpeg-node IRIS-3.0.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `IRIS-3.0.0.0`

## Build

```
$ docker build -t powpeg-node/iris-3.0.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/iris-3.0.0.0 bash -c 'sha256sum /code/powpeg-node/build/libs/*'
9ad0b7e4f93958beb819700e198edce7ccaf6e04e8167838b4d11630b196954d  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.0-all.jar
e2aa12d2657bd07fb01ac8680dec541a466863fd04d62338596c1c0b4ae52bc8  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.0-javadoc.jar
290823401c0780f23175c68b8512051cafbae106b98ff1030c224e400e9d3ac7  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.0-sources.jar
5d99915939d586532b6a3176befc1600a8a9a7b3ae7201ad137bb5d9fdba1400  /code/powpeg-node/build/libs/federate-node-IRIS-3.0.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/iris-3.0.0.0 /bin/true)
$ docker cp "$cid":/code/powpeg-node/build/libs ./libs/
$ docker rm "$cid"
```
