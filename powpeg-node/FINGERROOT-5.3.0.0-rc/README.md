# powpeg-node FINGERROOT-5.3.0.0-rc

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `FINGERROOT-5.3.0-rc`

## Build

```
$ docker build -t powpeg-node/fingerroot-5.3.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/fingerroot-5.3.0.0 bash -c 'sha256sum *'
611001cba9c67fa77e897a933fcfcad9d68f6a72c1be466058178af4103f00b4  federate-node-FINGERROOT-5.3.0.0-all.jar
6633f84cc85cd856cd71675a1034f91a676719266166bb5fdfb0ed3df51997d9  federate-node-FINGERROOT-5.3.0.0-javadoc.jar
cc162e1d3b193cd4d6e83eda65f212b258908ba8244e5f33ade2b6da427b8aaf  federate-node-FINGERROOT-5.3.0.0-sources.jar
97d95566d49c5ed386e46df270e1f7d6634c2abe0f065a81e92caedebeabbaf3  federate-node-FINGERROOT-5.3.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/fingerroot-5.3.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
