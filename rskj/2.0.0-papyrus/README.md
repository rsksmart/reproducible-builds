# rskj PAPYRUS-2.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `PAPYRUS-2.0.0`

## Build

```
$ docker build -t rskj-papyrus-2.0.0-reproducible .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.
```
$ docker run --rm rskj-papyrus-2.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS-all.jar
83dc18fff337848a4ea9dfc9e07c0cf51f7a5cb34d0a5767961164a71f2f4d9b  rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS-all.jar
$ docker run --rm rskj-papyrus-2.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS-sources.jar
a24c28a1e2eb9b29b9731d398b4cee7870bdbd46e6a44213c80eb1b4b387b0ce  /code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS-sources.jar
$ docker run --rm rskj-papyrus-2.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS.jar
5ec8af44f58cd262425e08fdd424af4afdaff3ef42621af1bffcc9651f58a919  rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS.jar
$ docker run --rm rskj-papyrus-2.0.0-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS.pom
bc0b79409074c084953e67f3ae0c0411565b0e173ab4a4a2d0c2bf8145ef0e18  rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS.pom
```


## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-papyrus-2.0.0-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS-all.jar ./rskj-core-2.0.0-PAPYRUS-all.jar
1 docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS-sources.jar ./rskj-core-2.0.0-PAPYRUS-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS.jar ./rskj-core-2.0.0-PAPYRUS.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.0-PAPYRUS.pom ./rskj-core-2.0.0-PAPYRUS.pom
$ docker rm temp-container
```
