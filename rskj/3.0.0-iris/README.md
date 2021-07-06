# rskj IRIS-3.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `IRIS-3.0.0`

## Build

```
$ docker build -t rskj/iris-3.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/iris-3.0.0 bash -c 'sha256sum /code/rskj/rskj-core/build/libs/rskj-core-3.0.0-IRIS{.jar,-all.jar,-sources.jar,.pom}'
d2f6594272748de21f70025e59525f2ffc6159ce21b6751590c3b535953c4d29  /code/rskj/rskj-core/build/libs/rskj-core-3.0.0-IRIS.jar
f7cb1e6c5568332d047c602a5b2c464c41688336b824d92ef3a40b89a8f55b60  /code/rskj/rskj-core/build/libs/rskj-core-3.0.0-IRIS-all.jar
751d87b110205357478a9bd7909413bf80afacd51bd10eaa502bec50fda5a410  /code/rskj/rskj-core/build/libs/rskj-core-3.0.0-IRIS-sources.jar
7204272b35891dca1d962af811dec92889d9564e5b200b5a50485101557e2f36  /code/rskj/rskj-core/build/libs/rskj-core-3.0.0-IRIS.pom
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/iris-3.0.0 /bin/true)
$ docker cp "$cid":/code/rskj/rskj-core/build/libs/ ./libs/
$ docker rm "$cid"
```
