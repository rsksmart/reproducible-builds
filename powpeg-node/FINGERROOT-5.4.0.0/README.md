# powpeg-node FINGERROOT-5.4.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `FINGERROOT-5.4.0.0`

## Build

```
$ docker build -t powpeg-node/fingerroot-5.4.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/fingerroot-5.4.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
97f46bef7f56e3c986c730f0eb28abff0acb9342f9fa3264a6bf9d8e34fa9c69  federate-node-FINGERROOT-5.4.0.0-all.jar
eda45351ce0a85152b62970cddee423f827cf55bc8f50ca414e4ffbbac63417d  federate-node-FINGERROOT-5.4.0.0-sources.jar
56c6d5dfe10bab16207fcd6fbd66e2f077a0c3706afa0daf12318104ed702837  federate-node-FINGERROOT-5.4.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/fingerroot-5.4.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
