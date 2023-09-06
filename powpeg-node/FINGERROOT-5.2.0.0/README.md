# powpeg-node FINGERROOT-5.2.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `FINGERROOT-5.2.0.0`

## Build

```
$ docker build -t powpeg-node/fingerroot-5.2.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/fingerroot-5.2.0.0 bash -c 'sha256sum *'
8a5df321d1de64fd67ba099830f95e87f4724f59ac6ce6a7afb52893024d1085  federate-node-FINGERROOT-5.2.0.0-all.jar
8008d515ea85c09d0417d89b6282a20637c0b0212a8d42229213cd27f9ce2bc3  federate-node-FINGERROOT-5.2.0.0-javadoc.jar
8ee39f5f1f3b16931e943623ed03a0e028f2319b80c77191c7056b3778aa22db  federate-node-FINGERROOT-5.2.0.0-sources.jar
17f5e260fc4a5484c5f1a35f09b54f7bf0843986a0c00844d4792f87f012b11b  federate-node-FINGERROOT-5.2.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/fingerroot-5.2.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
