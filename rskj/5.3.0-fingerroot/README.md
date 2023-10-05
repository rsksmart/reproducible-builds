# rskj FINGERROOT-5.3.0

* Source: https://github.com/rsksmart/rskj
* Tag: `FINGERROOT-5.3.0`

## Build

```
$ docker build -t rskj/5.3.0-fingerroot .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/5.3.0-fingerroot sh -c 'sha256sum * | grep -v javadoc.jar'
a9d5c6080aecd96c849e153dd4648072323c772f860c0c4fd812a321fc18ae90  rskj-core-5.3.0-FINGERROOT-all.jar
8f915c491a8c9d05c294aa11129a04d216821d861a24a731af1331c473804a20  rskj-core-5.3.0-FINGERROOT-sources.jar
75bccfafb6f7569faf5ff8e152adfeed2eeec1296e4826d0073df234d1cd62f6  rskj-core-5.3.0-FINGERROOT.jar
7f9e66e43b8034b47996fc3542ff68dec4b3cb222fbe35e9072f746313dc2d3f  rskj-core-5.3.0-FINGERROOT.module
c0a6371b25262330f12cbdf8f4502e2004b6de88b654d9b6017b2a169c7ff023  rskj-core-5.3.0-FINGERROOT.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/5.3.0-fingerroot
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/5.3.0-fingerroot /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
