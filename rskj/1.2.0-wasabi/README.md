# rskj WASABI-1.2.0

* Source: https://github.com/rsksmart/rskj
* Tag: `WASABI-1.2.0`

## Build

```
$ docker build -t rskj-wasabi-1.2.0-reproducible .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.
```
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-all.jar
e3901dd011ee798559ee965186a4a54fdb2233acfd73bbe2e3164f66d821e661  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-all.jar
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-sources.jar
7176ab053ca10479095c66415807a29b801f2004505ae7b6fde1fb212802cfac  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI-sources.jar
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.jar
0093793bbbcaf3ed9c5dead91b7dd5f36305a9d8f65413f7f03cdb995b9330ce  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.jar
$ docker run --rm rskj-wasabi-1.2.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.pom
cd4b595eaa5b6f60de6e9fd368e37bc09bec20f2dec572849d7fed53ae7ca390  /code/rskj/rskj-core/build/libs/rskj-core-1.2.0-WASABI.pom
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
