# powpeg-node VETIVER-9.0.4.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `VETIVER-9.0.4.0`

## Build

```
$ docker build -t powpeg-node/vetiver-9.0.4.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/vetiver-9.0.4.0 bash -c 'sha256sum * | grep -v javadoc.jar'
7fd7c933c3f7cbf379e9bb4232dc5dadf5d1870518c99946af576587de445d8f  federate-node-VETIVER-9.0.4.0-all.jar
75b1562d938276d50498cef793feae050c8068e196468c6780f35ac5cdf677dc  federate-node-VETIVER-9.0.4.0.jar
a1aae43db50a68b8a1e8c576a2692e53f43d5404d5cfbad0321fffb7e8726968  federate-node-VETIVER-9.0.4.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/vetiver-9.0.4.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
