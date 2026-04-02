# powpeg-node VETIVER-9.0.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `VETIVER-9.0.0.0`

## Build

```
$ docker build -t powpeg-node/vetiver-9.0.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/vetiver-9.0.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
62b40ab76650b175e2a2190b8e8f380b1220b6372d5d266c09d2e1796684e48d  federate-node-VETIVER-9.0.0.0-all.jar
da859f69673dd415a051a2007ad5e4bc85e59da43629c5140358c9919c3fa0ab  federate-node-VETIVER-9.0.0.0.jar
af7a7bce8af3b7b06b4e7793c0c08cd3d07e75006adbf37a3a4e2b5afa32a809  federate-node-VETIVER-9.0.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/vetiver-9.0.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
