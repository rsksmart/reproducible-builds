# rskj WASABI-1.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.0.0`

## Build

```
$ docker build -t rskj-wasabi-1.0.0-reproducible .
```

If you had already generated this reproducible build prior to its retag, please add `--no-cache` parametet to the build command to ensure the image regeneration. 

## Verify

```
$ docker run --rm rskj-wasabi-1.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-all.jar
f67d4da176110b0b06e0684ecc5a341db189d17885c31ad8c0fe14992ab4f2f8 /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-sources.jar
4b42b32ffc634f137c6b128dda38ff98496cb0ff64234345589c2d95e1c75dd4 /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.jar
3937678757cff7cc708487a011971c510a2adb98d80d254ff4dafb0a9bd4fcac /code/rskj/rskj-core/build/libs/rskj-core-1.0.0-WASABI.jar
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
