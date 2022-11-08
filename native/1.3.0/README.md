# Native Library 1.3,0

* Source: https://github.com/rsksmart/native
* Tag: `1.3.0`

## Build

```
$ docker build -t native-libs .
```

## Verify

```
$ docker run --rm native-1.3.0 sha256sum /code/native/build/native-1.3.0.jar
cf03d2230ae7cf5349b44ffb3f089193aff17d8b8f6071ff562605d1be99228c  build/native-1.3.0.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container native-1.3.0 /bin/true
$ docker cp temp-container:/code/native/build/native-1.3.0.jar ./native-1.3.0.jar
$ docker rm temp-container
```
