# powpeg-node VETIVER-9.0.3.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `VETIVER-9.0.3.0`

## Build

```
$ docker build -t powpeg-node/vetiver-9.0.3.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/vetiver-9.0.3.0 bash -c 'sha256sum * | grep -v javadoc.jar'
b52e492807dc47525b2d09c459cc58028c019758889b0d4b7e673e18fa22ba60  federate-node-VETIVER-9.0.3.0-all.jar
df8427ed999ee4a65237fe09a2d49a43cb8709e487698348571974eabff801e4  federate-node-VETIVER-9.0.3.0.jar
e6d051f6649734242a11be77ad098e0ca1bc4ac20918355961514fdbec9336ab  federate-node-VETIVER-9.0.3.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/vetiver-9.0.3.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
