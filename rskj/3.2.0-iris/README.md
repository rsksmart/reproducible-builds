# rskj IRIS-3.2.0

* Source: https://github.com/rsksmart/rskj
* Tag: `IRIS-3.2.0`

## Build

```
$ docker build -t rskj/3.2.0-iris .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
docker run --rm rskj/3.2.0-iris sh -c 'sha256sum rskj-core-3.2.0-IRIS-all.jar rskj-core-3.2.0-IRIS-sources.jar rskj-core-3.2.0-IRIS.jar rskj-core-3.2.0-IRIS.pom rskj-core-3.2.0-IRIS.module'
fe8432293600ba403e48e50253c5cdf322d8ec578b1984d17a26bf508a061c8a  rskj-core-3.2.0-IRIS-all.jar
e15b0864a380cfe5c6df20971dd3e262e728d3ace40872501e8ee058b8a7763a  rskj-core-3.2.0-IRIS-sources.jar
3a0b939f66df64a06e406d453fa668a1f4c8675a3f631b1b5659beb220fb185b  rskj-core-3.2.0-IRIS.jar
88bd754a83ae41b61592c8fcb51f8bc09e3680fa3eee0b16977786f3812adae5  rskj-core-3.2.0-IRIS.pom
af363c8c20415edb3b714ea88753cf65fedcf1917928d97d4c29353192ed8603  rskj-core-3.2.0-IRIS.module
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/3.2.0-iris
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/3.2.0-iris /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
