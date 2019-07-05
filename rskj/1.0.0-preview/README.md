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
6b01a187cad148c3674b32515ac35450d32dc2959e7ed2460419ba1b8977054d /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-all.jar
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-sources.jar
ba1f263cdf2827a68da07429a43d08d2de63344caab9977b3c20f58057050f8f /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-sources.jar
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.jar
6d29e778f1fc3ee6fa4cffaaae2a2303d076b559c497346526c0eb0a78b00df8 /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.jar
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
