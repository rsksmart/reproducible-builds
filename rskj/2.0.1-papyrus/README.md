# rskj PAPYRUS-2.0.1

* Source: https://github.com/rsksmart/rskj
* Tag: `PAPYRUS-2.0.1`

## Build

```
$ docker build -t rskj-papyrus-2.0.1-reproducible .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.
```
$ docker run --rm rskj-papyrus-2.0.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS-all.jar
43149abce0a737341a0b063f2016a1e73dae19b8af8f2e54657326ac8eedc8a0  rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS-all.jar
$ docker run --rm rskj-papyrus-2.0.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS-sources.jar
c1bdb9aeff6463906d75874773e2633f006281d41b244e5cbc6b4115d023a7f8  /code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS-sources.jar
$ docker run --rm rskj-papyrus-2.0.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS.jar
7833de3cf827fc7c665b4d03fb425afb0d26140dfbade5b70edb4cb6e2694561  rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS.jar
$ docker run --rm rskj-papyrus-2.0.1-reproducible sha256sum /code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS.pom
9b915279251248222c56f95fae060f84464f4c89bb9bc32ac2e2594f937f9fa5  rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS.pom
```


## (Optional) Extract JAR from image

```
$ docker run --name temp-container rskj-papyrus-2.0.1-reproducible /bin/true
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS-all.jar ./rskj-core-2.0.1-PAPYRUS-all.jar
1 docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS-sources.jar ./rskj-core-2.0.1-PAPYRUS-sources.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS.jar ./rskj-core-2.0.1-PAPYRUS.jar
$ docker cp temp-container://code/rskj/rskj-core/build/libs/rskj-core-2.0.1-PAPYRUS.pom ./rskj-core-2.0.1-PAPYRUS.pom
$ docker rm temp-container
```
