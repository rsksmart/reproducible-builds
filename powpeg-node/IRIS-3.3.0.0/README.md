# powpeg-node IRIS-3.3.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `IRIS-3.3.0.0`

## Build

```
$ docker build -t powpeg-node/iris-3.3.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/iris-3.3.0.0 bash -c 'sha256sum *'
31b4acb48400d98784c9f19940ddcb12a597cb45ac83fe231d479314057c8e6f  federate-node-IRIS-3.3.0.0-all.jar
fda07a7862d20cd2864ae19def270f5edbfc367b798dae0ba5a274eeb106fe83  federate-node-IRIS-3.3.0.0-javadoc.jar
9cd9da129289501d611eb23ac82eb96337c18f1280c4590856328243c07e607d  federate-node-IRIS-3.3.0.0-sources.jar
d21f99d6f326c98d0f16aafcf8d0cad8eaa80d4d3a3e665d9f8ade5078c9eae0  federate-node-IRIS-3.3.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/iris-3.3.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
