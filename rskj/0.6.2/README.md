# rskj ORCHID-0.6.2

* Source: https://github.com/rsksmart/rskj
* Tag: `ORCHID-0.6.2`

## Build

```
$ docker build -t rskj-orchid-0.6.2-reproducible .
```

## Verify

```
$ docker run --rm rskj-orchid-0.6.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID-all.jar
90d8c45a044fd505b8c551b74376adb102b4bbd50f5e529337b71218198a535b  /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID-all.jar
$ docker run --rm rskj-orchid-0.6.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID-sources.jar
b6240946b1603c37bfc5b0826cd2393d941acf7a23fb1c57d618db5e49f211c2  /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID-sources.jar
$ docker run --rm rskj-orchid-0.6.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID.jar
0d67d6e8b04676a260e5b1e3fc774bef2fe751270d4f552d643fe67d7c5e1340  /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID.jar
$ docker run --rm rskj-orchid-0.6.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID.pom
7477060f0728a74a01024cb591dd8eb4baa35662a56700fbfe6b6ed4d4df3d9b  /code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-orchid-0.6.2-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID-all.jar ./rskj-core-0.6.2-ORCHID-all.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID-sources.jar ./rskj-core-0.6.2-ORCHID-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID.jar ./rskj-core-0.6.2-ORCHID.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-0.6.2-ORCHID.pom ./rskj-core-0.6.2-ORCHID.pom
$ docker rm temp-container
```
