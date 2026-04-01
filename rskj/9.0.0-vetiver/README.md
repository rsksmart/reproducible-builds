# rskj VETIVER-9.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `VETIVER-9.0.0`

## Build

```
$ docker build -t rskj/9.0.0-vetiver .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/9.0.0-vetiver sh -c 'sha256sum * | grep -v javadoc.jar'
f120a63d685a4df9344371358ac16bbd65ed54b09db79357d2f1fdc2c94c8a8f  rskj-core-9.0.0-VETIVER-all.jar
035decfbcd1dfcb1cf90290e14d95cc621abe2482375802453f13ee458730526  rskj-core-9.0.0-VETIVER-sources.jar
04bb7ca2016e9e66b2924222c67e6bef0d7f41f24c08d23fe5edf0615bbb430b  rskj-core-9.0.0-VETIVER.jar
c09bebc2d210fcfa19c32ce110fe93a892bf4f3391f704165f0eec5cbadf26b6  rskj-core-9.0.0-VETIVER.module
2b92ef7957248997ebe4b7581aa5a923414c31e65cd729fed64d7c8cf24a99ed  rskj-core-9.0.0-VETIVER.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/9.0.0-vetiver
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/9.0.0-vetiver /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
