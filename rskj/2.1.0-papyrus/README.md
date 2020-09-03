# rskj PAPYRUS-2.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `PAPYRUS-2.1.0`

## Build

```
$ docker build -t rskj-papyrus-2.1.0-reproducible .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.
```
$ docker run --rm rskj-papyrus-2.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-all.jar
ecc4163c5292cef3b72580f07cfa30dae3996a95fc426ea09766a71e07d58918  rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-all.jar
$ docker run --rm rskj-papyrus-2.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-sources.jar
3e6e0f16dbea9b30057d1fbd8ff60a124f5628a8bdc9ba40714cedad72430c24  /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-sources.jar
$ docker run --rm rskj-papyrus-2.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.jar
c9368f17bde640dfcaceb4df78708c23d4fe4bd3945d92d5ebccc8d037d5ddc9  rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.jar
$ docker run --rm rskj-papyrus-2.1.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.pom
b3c6d33856b497532357a2808b41e30c145b686647d926bdad104b7d8eb2e212  rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.pom
```


## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-papyrus-2.1.0-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-all.jar ./rskj-core-2.1.0-PAPYRUS-all.jar
1 docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-sources.jar ./rskj-core-2.1.0-PAPYRUS-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.jar ./rskj-core-2.1.0-PAPYRUS.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.pom ./rskj-core-2.1.0-PAPYRUS.pom
$ docker rm temp-container
```
