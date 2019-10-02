# rskj WASABI-1.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.1.0`

## Build

```
$ docker build -t rskj-wasabi-1.1.0-reproducible .
```

If you had already generated this reproducible build prior to its retag, please add `--no-cache` parametet to the build command to ensure the image regeneration. 

## Verify

```
$ docker run --rm rskj-wasabi-1.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-all.jar
460faab572db3aa9fd41244ef32ca667b5f5ad747fa73abe182a8b510c191334  /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-sources.jar
347eb21fc8b35b84f6c49254999fb923bebfed0a36837137b74deab3dfc47f73  /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.jar
69ff143fc80c5370491e63c8262e5907c95d275c59eef7ce7e4f670512ccc10e  /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.jar
$ docker run --rm rskj-wasabi-1.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.pom
1aa633056a24056d0e50d310d1b000595205b46d1a449d63c1cf6381b9257960  /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-wasabi-1.1.0-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-all.jar ./rskj-core-1.1.0-WASABI-all.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-sources.jar ./rskj-core-1.1.0-WASABI-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.jar ./rskj-core-1.1.0-WASABI.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.pom ./rskj-core-1.1.0-WASABI.pom
$ docker rm temp-container
```
