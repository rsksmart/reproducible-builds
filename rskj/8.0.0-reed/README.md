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