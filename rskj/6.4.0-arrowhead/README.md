# rskj ARROWHEAD-6.4.0

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.4.0`

## Build

```
$ docker build -t rskj/6.4.0-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.4.0-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
269c6416759ff8979e6bc6a6b1ae96ab95705f1c397df06b160a9f2070a373ce  rskj-core-6.4.0-ARROWHEAD-all.jar
cb4ecbcf4654d97177389f5505764e3cc9ef5b5f87f7aca2956151c71416d315  rskj-core-6.4.0-ARROWHEAD-sources.jar
bbc0fc1bb7e865c9e11eb78317db32592c9b7dfd8a6818890729af5827a66237  rskj-core-6.4.0-ARROWHEAD.jar
fabf8af48c167d42d290e9fa44f80b76b96cd403b56c4c87f8df23fd0ea3c9f0  rskj-core-6.4.0-ARROWHEAD.module
6dbc8153d510d4e910759e2e76cf40f9c0635185f66aa612dac4b2c8a60d0c63  rskj-core-6.4.0-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.4.0-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.4.0-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
