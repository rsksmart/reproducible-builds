# rskj FINGERROOT-5.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `FINGERROOT-5.0.0`

## Build

```
$ docker build -t rskj/5.0.0-fingerroot .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/5.0.0-fingerroot sh -c 'sha256sum * | grep -v javadoc.jar'
198d13a8676714f289e5707dba3f45c6c2dbc5daa1a08c669e64a41df2fe330a  rskj-core-5.0.0-FINGERROOT-all.jar
53e4c044c57ec58b838bd8d9c196d69867c7d2240f8d7235ecce1ee0056af154  rskj-core-5.0.0-FINGERROOT-sources.jar
8bb10e7a44a1282458761896455e884d6411b36cb6f43c46dff980d40322ad22  rskj-core-5.0.0-FINGERROOT.jar
c05b0296127af99424932ece50fad2c3de2b87c68f840b583321eba032593005  rskj-core-5.0.0-FINGERROOT.module
cec2a923e5614003233f70237ea8faa1bd138e6db70ab9fea61080dd2af44227  rskj-core-5.0.0-FINGERROOT.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/5.0.0-fingerroot
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/5.0.0-fingerroot /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
