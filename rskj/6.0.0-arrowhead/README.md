# rskj ARROWHEAD-6.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.0.0`

## Build

```
$ docker build -t rskj/6.0.0-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.0.0-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
6ff79be3010728354fb5a41c1947540ea5649cba31a455ea6ad5721aef2cd596  rskj-core-6.0.0-RC-all.jar
ce1ea48baacf35d6b7a2df90b5e6b3ddfbba53abc33a9cefedeb96a856775d4a  rskj-core-6.0.0-RC-sources.jar
5153dcb354d0fe4eaa1207fd178dbd3f72b9898715ae2879a16198aff3ade99b  rskj-core-6.0.0-RC.jar
f4cbf3943bd9fa953eb6b6d2afc89e83c14eb34a47d0d298211f07273780a2b5  rskj-core-6.0.0-RC.module
ef91f20f83c31f33c6c5af170f88ecb299a833eb980890c7f0ebeaf407bd9569  rskj-core-6.0.0-RC.pom

```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.0.0-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.0.0-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
