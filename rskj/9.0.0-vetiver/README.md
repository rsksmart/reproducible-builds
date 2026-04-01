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
<TODO ADD SHA256SUM>
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
