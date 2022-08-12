# powpeg-node HOP-4.0.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.0.0.0`

## Build

```
$ docker build -t powpeg-node/hop-4.0.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.0.0.0 bash -c 'sha256sum *'
c0aef92c70747e5cc393c3a909070fb04ffafb3c4ff3cb494510106b75a2101e  federate-node-HOP-4.0.0.0-all.jar
552dd8bf314e58ba32a90a88aecaf4ebcdf7cfa09ed345ca78e6c6cf15226eed  federate-node-HOP-4.0.0.0-javadoc.jar
a07e00fcb3ffa7a4aec51041e691abd4d6fc9a969b64d6b11e580afb7bd99593  federate-node-HOP-4.0.0.0-sources.jar
4e76c259e314ca15a5bf3ad628ac21b692f3a029608c53626fe6ed1ca36a555d  federate-node-HOP-4.0.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.0.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
