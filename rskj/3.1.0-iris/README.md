# rskj IRIS-3.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `IRIS-3.1.0`

## Build

```
$ docker build -t rskj/3.1.0-iris .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
docker run --rm rskj/3.1.0-iris sh -c 'sha256sum rskj-core-3.1.0-IRIS-all.jar rskj-core-3.1.0-IRIS-sources.jar rskj-core-3.1.0-IRIS.jar rskj-core-3.1.0-IRIS.pom'
07dea8cd7b80e1341c06e1c9f6d15f2b381f5d46443db777ebded194088a5784  rskj-core-3.1.0-IRIS-all.jar
4c895d1a47efeef16bc191f69001f365fd08e29a96f542285f5c2215e0f96077  rskj-core-3.1.0-IRIS-sources.jar
3a2e0de68341689bc3b71f0cd1510f46fb81870ef45cd12324d7f6c3a1ee6f30  rskj-core-3.1.0-IRIS.jar
c1ec61afa6f15e61e2ac4f7f254ae7b2f3d02ccfc095ebca5fe1770826cf0ee4  rskj-core-3.1.0-IRIS.pom

```
## (Optional) Run RSK Node
```
$ docker run -d rskj/3.1.0-iris
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/3.1.0-iris /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
