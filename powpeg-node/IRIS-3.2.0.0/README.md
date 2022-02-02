# powpeg-node IRIS-3.2.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `IRIS-3.2.0.0`

## Build

```
$ docker build -t powpeg-node/iris-3.2.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/iris-3.2.0.0 bash -c 'sha256sum *'
2edf6f67d67bf42259b3c5a689a1b503e76591c9c739d4057a6d3e025dab4ed1  federate-node-IRIS-3.2.0.0-all.jar
c697a271cc795c9ec195925232d7b399e180f5af4901f518918375cce21f018b  federate-node-IRIS-3.2.0.0-javadoc.jar
2855341297308db54c3d473d85d7fc9adc17020608f76b4093e0c9843c6ff5af  federate-node-IRIS-3.2.0.0-sources.jar
4951e61bfee2f002eee3063d0bc12a97a95e1365f7e17758c7385d46c0f250d3  federate-node-IRIS-3.2.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/iris-3.2.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
