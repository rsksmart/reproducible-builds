# rskj HOP-4.1.1

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-4.1.1`

## Build

```
$ docker build -t rskj/4.1.1-hop .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.1.1-hop sh -c 'sha256sum * | grep -v javadoc.jar'
c71b644e6080e7e1b42b34b075f51ee37de49ab956282e51ca5f115d73a90c1f  rskj-core-4.1.1-HOP-all.jar
440d04303885a9917e84ac8d3854f03abcde69f711ad8283501b267a125bcd85  rskj-core-4.1.1-HOP-sources.jar
c26318eaa7213dea3ae267219bf78be9147e84b7d2f00f451f8820a8e4633bac  rskj-core-4.1.1-HOP.jar
6d7381d939378eebc050e9cd2e9e85fe14d6f96ee5fc9b311a2b35d773f430ee  rskj-core-4.1.1-HOP.module
28990f96cbe691c6f26ca9d676fa154bd571d0dc3bdabb65f3bb07550f838f34  rskj-core-4.1.1-HOP.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.1.1-hop
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.1.1-hop /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
