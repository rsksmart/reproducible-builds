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
20a82720dd39864ae3603b7eb777ed454e4577c7d984b9560017fc4ddd820924  /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-sources.jar
0f76a447ecdf7a78c990293a90388c3a316996e66ecc670bb59a0ece3d237dcc  /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.jar
d233feac37d6e5daca2ffa78d4ece4a3e00fe9ebbca00d0fdf862addc5564fcf  /code/rskj/rskj-core/build/libs/rskj-core-1.1.0-WASABI.jar
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
