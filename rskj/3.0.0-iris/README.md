# rskj IRIS-3.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `IRIS-3.0.0`

## Build

```
$ docker build -t rskj/3.0.0-iris .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/3.0.0-iris sh -c 'sha256sum *'
ab8d2e2df0c58535ff437f271c9bb0faf20daabf39c9a06a77b209a56c8a5432  rskj-core-3.0.0-IRIS-all.jar
6b2cc039bd4fe46f059eb2407012830d7c06519433d7400d8015d154a235e419  rskj-core-3.0.0-IRIS-javadoc.jar
4aec24fb77222c3a6f9677b9f75e248b0de9b55376774711d77a74d87b80908c  rskj-core-3.0.0-IRIS-sources.jar
22e14520afd4106a34f1d6bc2826c89f79a0b59ea7575a5c572880e98ef713d3  rskj-core-3.0.0-IRIS.jar
eb7eea5f696b3bf1a89cfd61a84d9af158e12215500d73810de7a9f5ff86bf77  rskj-core-3.0.0-IRIS.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/3.0.0-iris
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/3.0.0-iris /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
