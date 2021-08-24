# rskj IRIS-3.0.1

* Source: https://github.com/rsksmart/rskj
* Tag: `IRIS-3.0.1`

## Build

```
$ docker build -t rskj/3.0.1-iris .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
docker run --rm rskj/3.0.1-iris sh -c 'sha256sum rskj-core-3.0.1-IRIS-all.jar rskj-core-3.0.1-IRIS-sources.jar rskj-core-3.0.1-IRIS.jar rskj-core-3.0.1-IRIS.pom'
a6223f3a9d289f1d5a4ab535b5e748f43b5829ab6274050b93f86d2c77223683  rskj-core-3.0.1-IRIS-all.jar
64de6323cf741c090797fe41c073534f3743a2b8e6bc31b5ace8845476b966d1  rskj-core-3.0.1-IRIS-sources.jar
b84bf67c18772cd38a170a535eda0515bda777104e0abda23137c0e58fdc9c17  rskj-core-3.0.1-IRIS.jar
1f69bfa09b0c126666cc1d207137f07c6492c1477ff569a937cd4c52873bdb17  rskj-core-3.0.1-IRIS.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/3.0.1-iris
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/3.0.1-iris /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
