# rskj WASABI-1.3.0

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.3.0`

## Build

```
$ docker build -t rskj-wasabi-1.3.0-reproducible .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.
```
$ docker run --rm rskj-wasabi-1.3.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI-all.jar
1343a100363d78db8c6563ec0778646b17af7fdaf7de2ac5932537582c079ddd /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.3.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI-sources.jar
5ab02adee2c610d923432704e72601066e78b2d78b9d55a0f4ce2757ab8a1e3f  /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.3.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI.jar
c34c2dbcf2aee1f51b1a0850fa406dece3427b051acf11f2a2ef4d69840278ba /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI.jar
$ docker run --rm rskj-wasabi-1.3.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI.pom
60f87f549f72532cabe8f1583c55006636b99ef29ef6bd1ff4e71b907bffe140 /code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-wasabi-1.3.0-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI-all.jar ./rskj-core-1.3.0-WASABI-all.jar
1 docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI-sources.jar ./rskj-core-1.3.0-WASABI-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI.jar ./rskj-core-1.3.0-WASABI.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.3.0-WASABI.pom ./rskj-core-1.3.0-WASABI.pom
$ docker rm temp-container
```
