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
d917e9040ffd779e7200d5b4b954b3c64d1bfc89ee7be8f23b156152b979be9f  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-all.jar
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-sources.jar
1b960d74d2cef2dab77fc1aec2ab51b9ae4b56b21eab8976e703d99e25f5d0f4  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW-sources.jar
$ docker run --rm rskj-wasabi-1.0.0-preview-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.jar
061304a940fdc09f2a4cde7e33624aae784307b26e90fa4552743c76c9801f12  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-PREVIEW.jar
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
