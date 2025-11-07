# rskj REED-8.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `REED-8.1.0`

## Build

```
$ docker build -t rskj/8.1.0-reed .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/8.1.0-reed sh -c 'sha256sum * | grep -v javadoc.jar'
f8535514f7a02181da768543782ec9b811128b6af20f44d1d5c0c5510ecdaaf1  rskj-core-8.1.0-REED-all.jar
e4eaa4d19b0fc35f637b2db5726d3168326b0585cd4bfa87c8e806b4acececad  rskj-core-8.1.0-REED-sources.jar
9881cd4c2d50967d62a0c73bb2cd5ee2bda54917e162be6feb9e5e63159ba4a8  rskj-core-8.1.0-REED.jar
ad13579e87e63dbf356fb3da20a468c6155e12be60633d13671f1d2005b645bd  rskj-core-8.1.0-REED.module
33776365d7b1eb230aaf644b54992a8e3bb49d46ba3f54c8455fcaabdad42c76  rskj-core-8.1.0-REED.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/8.1.0-reed
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/8.1.0-reed /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```