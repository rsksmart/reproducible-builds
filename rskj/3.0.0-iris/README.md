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
8c975d8489599dbe551e90f96b450ec8a2589385c3176e4ce6ced9d44b09782b  rskj-core-3.0.0-IRIS-all.jar
9552d2506b8afc6619e6215b1b7af95a78046d65d0af77ea0330d08a141966b4  rskj-core-3.0.0-IRIS-javadoc.jar
e46c2471d23a5b474bc0bf84a648b976fbc3057493ba48debf80f15333a79dbd  rskj-core-3.0.0-IRIS-sources.jar
d9b66f76e1aa0aca88d276f92e5de63b0b28a0f1412db3ea5e6fdd91d69528cb  rskj-core-3.0.0-IRIS.jar
876f981c5d5e9dfa6285393aff271f8ae197cc3550d53d77f13e2c4f2d44a38f  rskj-core-3.0.0-IRIS.pom
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
