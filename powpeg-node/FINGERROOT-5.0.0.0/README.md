# powpeg-node FINGERROOT-5.0.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `FINGERROOT-5.0.0.0`

## Build

```
$ docker build -t powpeg-node/fingerroot-5.0.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/fingerroot-5.0.0.0 bash -c 'sha256sum *'
c427df8c74a9ec2f73f6f659005670255e4a56e38a2c6c5261f65776ef17250c  federate-node-FINGERROOT-5.0.0.0-all.jar
6913da3bd497f7a3db0bcee8ef9632fbe83e14e4efb2911d859c002af15ab053  federate-node-FINGERROOT-5.0.0.0-javadoc.jar
623c7685788e02376c391e51a58ea06dd76cb71fbae44d1c3720232f258da089  federate-node-FINGERROOT-5.0.0.0-sources.jar
4f50f07770445c297a2e73118d31ff4de8e7bc64ff8a5d3bdca1d63110340547  federate-node-FINGERROOT-5.0.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/fingerroot-5.0.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
