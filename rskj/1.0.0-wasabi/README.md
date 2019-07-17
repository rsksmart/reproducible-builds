# rskj WASABI-1.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.0.0`

## Build

```
$ docker build -t rskj-wasabi-1.0.0-reproducible .
```

## Verify

```
$ docker run --rm rskj-wasabi-1.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-all.jar
73f0e06b87083b3b9e68b2222ee3d3c5e1004ca46af32a486f3047875501f1e4 /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-sources.jar
a83130dabe7c218d7e8f76f64d7f82a8bbede36ec3a4f5298056f8e53d50f096 /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.jar
3188052c2e6c8af2eaf0f38185cb6f72b925a6b5adc7845f647650538ccdc910 /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.jar
$ docker run --rm rskj-wasabi-1.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.pom
dcb170ad378477f9c4de3a4ce8e7980ed3987af0dd583e0e6b7d733f27fe1b64  /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-wasabi-1.0.0-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-all.jar ./rskj-core-1.0.0-WASABI-all.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-sources.jar ./rskj-core-1.0.0-WASABI-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.jar ./rskj-core-1.0.0-WASABI.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.pom ./rskj-core-1.0.0-WASABI.pom
$ docker rm temp-container
```
