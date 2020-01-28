# rskj WASABI-1.2.0

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.2.1`

## Build

```
$ docker build -t rskj-wasabi-1.2.1-reproducible .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.
```
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-all.jar
010fde68e333eb956ba9fb631260486911d03088c5e7b38e1900f5bda5346fc3  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-sources.jar
b307f4e291eb21befcc64788edfa19e9fbc630e045bde7dbf8dd1d4fd12f47d4  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.jar
140d633601c5f68debfd2ba499bb2f90c5935cf3de604ab53c3ad0b550b93721  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.jar
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.pom
13293847fe6a2cc592212a2e3b18261b53ccf4cda558003436c9c4e5fcc4d986  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-wasabi-1.2.0-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-all.jar ./rskj-core-1.2.0-WASABI-all.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-sources.jar ./rskj-core-1.2.0-WASABI-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.jar ./rskj-core-1.2.0-WASABI.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.pom ./rskj-core-1.2.0-WASABI.pom
$ docker rm temp-container
```
