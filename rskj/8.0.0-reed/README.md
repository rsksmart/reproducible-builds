# rskj REED-8.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `REED-8.0.0`

## Build

```
$ docker build -t rskj/8.0.0-reed .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/8.0.0-reed sh -c 'sha256sum * | grep -v javadoc.jar'
c16adff53b5b1714f184babf241aa053761510b44adb47f8aea49fc1525d4718  rskj-core-8.0.0-REED-all.jar
0f5ceafca1fed05bf78321d1626cfccaf1d1475fdd37390f0b00dac697010052  rskj-core-8.0.0-REED-sources.jar
3b46403d23e2192306931c51fd83e960536b9c9d7eea23b16042ddbae5bbe62d  rskj-core-8.0.0-REED.jar
0ec445d82050f4f589334d213a44d7a654c52ad61e039d8e989b177f8643db73  rskj-core-8.0.0-REED.module
0f90170b81c7e9c3841475c5c01b40d1e793890dc004aca9b12e48c7ddcc3846  rskj-core-8.0.0-REED.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/8.0.0-reed
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/8.0.0-reed /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```