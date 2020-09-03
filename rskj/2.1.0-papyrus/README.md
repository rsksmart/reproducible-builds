# rskj PAPYRUS-2.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `PAPYRUS-2.1.0`

## Build

```
$ docker build -t rskj/papyrus-2.1.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/papyrus-2.1.0 bash -c 'sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS{.jar,-all.jar,-sources.jar,.pom}'
c9368f17bde640dfcaceb4df78708c23d4fe4bd3945d92d5ebccc8d037d5ddc9  /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.jar
ecc4163c5292cef3b72580f07cfa30dae3996a95fc426ea09766a71e07d58918  /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-all.jar
3e6e0f16dbea9b30057d1fbd8ff60a124f5628a8bdc9ba40714cedad72430c24  /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS-sources.jar
b3c6d33856b497532357a2808b41e30c145b686647d926bdad104b7d8eb2e212  /code/rskj/rskj-core/build/libs/rskj-core-2.1.0-PAPYRUS.pom
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/papyrus-2.1.0 /bin/true)
$ docker cp "$cid":/code/rskj/rskj-core/build/libs/ ./libs/
$ docker rm "$cid"
```
