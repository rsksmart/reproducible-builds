# rskj WASABI-1.0.0-PREVIEW

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.0.0-PREVIEW`

## Build

```
$ docker build -t rskj-wasabi-1.0.0-preview-reproducible .
```

## Verify

```
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-all.jar
8441da0a0208c7e12146e63ce22566266e0eea6ef3bec2e94767fd22dd9c9646  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-all.jar
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-sources.jar
7248948fbc0629ea01938cc6ddaca8be2f8c80cf2fc62e2c93268ae0c797e375  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-sources.jar
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.jar
e64316e087e38ec98f897dd418ebff4881bfb0fc6e09e43979c9a556a3f99c56  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.jar
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.pom
c4615e3a03a405f9db2853d3621d37db8fa417ab50ae643635bd376e55d077f3  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-wasabi-1.0.0-preview-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-all.jar ./rskj-core-1.0.0-PREVIEW-all.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-sources.jar ./rskj-core-1.0.0-PREVIEW-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.jar ./rskj-core-1.0.0-PREVIEW.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.pom ./rskj-core-1.0.0-PREVIEW.pom
$ docker rm temp-container
```
