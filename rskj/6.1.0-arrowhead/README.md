# rskj ARROWHEAD-6.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.1.0`

## Build

```
$ docker build -t rskj/6.1.0-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.1.0-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
7c3973d1a062235d8cc4de7e9010000cdcaada103ac0b2162bf813b4b29629b6  rskj-core-6.1.0-ARROWHEAD-all.jar
aeefef1fa761520b05ed87fd24d67200abf44db9a01ab1988daa0b2b33187026  rskj-core-6.1.0-ARROWHEAD-sources.jar
f4fd1c04c910a996e0965036dff85529ee7453d952369a0382e3e5b6345d0c14  rskj-core-6.1.0-ARROWHEAD.jar
432b75052916f6d44fed8ed6fee2267e9afcfcaf240f566ced648367738363cf  rskj-core-6.1.0-ARROWHEAD.module
16d56b563f95d74214f69b77a5019b905f72266b8f1f81dddb41ff34b8ceca44  rskj-core-6.1.0-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.1.0-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.1.0-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
