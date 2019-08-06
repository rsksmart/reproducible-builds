# rskj WASABI-1.0.2

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.0.2`

## Build

```
$ docker build -t rskj-wasabi-1.0.2-reproducible .
```

If you had already generated this reproducible build prior to its retag, please add `--no-cache` parametet to the build command to ensure the image regeneration. 

## Verify

```
$ docker run --rm rskj-wasabi-1.0.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI-all.jar
2fb6dcc0ab18e3c43a0f5073b1e11d514bd7ea74cd430e1e0bfca06d3126242a /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.0.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI-sources.jar
7da09e5be1541b1a57234f65c8a543bdb6b9e9ddbedb830387915a9f4a72c31d /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.0.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI.jar
007c27b02c8cd64d47affac7d18d793457aaf15d1b7ee773bd02e44d55676144 /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI.jar
$ docker run --rm rskj-wasabi-1.0.2-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI.pom
ea7cdf523a6512e8800634daac08dc6fac83986b155fc86424f5acfcce6cdefc /code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-wasabi-1.0.2-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI-all.jar ./rskj-core-1.0.2-WASABI-all.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI-sources.jar ./rskj-core-1.0.2-WASABI-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI.jar ./rskj-core-1.0.2-WASABI.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.2-WASABI.pom ./rskj-core-1.0.2-WASABI.pom
$ docker rm temp-container
```
