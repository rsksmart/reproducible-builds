# rskj WASABI-1.2.1

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.2.1`

## Build

```
$ docker build -t rskj-wasabi-1.2.1-reproducible .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.
```
$ docker run --rm rskj-wasabi-1.2.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI-all.jar
63ecedbfc52d0738495048be2cee214ee3d12f021ba4e256b903e9f02f4ee84a  /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.2.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI-sources.jar
6e7b9ddd998e96af543b76c182b075d459c8d97b2ba3ce7f7d2ba208ebaa65b6  /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.2.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI.jar
522384346784b68ce5d3c5b9842cd40f03c3bb76822a456dc5d07c1894831c06  /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI.jar
$ docker run --rm rskj-wasabi-1.2.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI.pom
13293847fe6a2cc592212a2e3b18261b53ccf4cda558003436c9c4e5fcc4d986  /code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-wasabi-1.2.1-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI-all.jar ./rskj-core-1.2.1-WASABI-all.jar
1 docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI-sources.jar ./rskj-core-1.2.1-WASABI-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI.jar ./rskj-core-1.2.1-WASABI.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.2.1-WASABI.pom ./rskj-core-1.2.1-WASABI.pom
$ docker rm temp-container
```
