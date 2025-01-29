# rskj ARROWHEAD-6.5.1

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.5.1`

## Build

```
$ docker build -t rskj/6.5.1-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.5.1-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
294f99ec76befa7d9ef18eca28d0c884ceb463ce855ef23ddb7a476e551ba191  rskj-core-6.5.1-ARROWHEAD-all.jar
ec4ea3143fb95fbf878b24c8d00ebe5994c4586ecf92930743b26dc77395c17a  rskj-core-6.5.1-ARROWHEAD-sources.jar
16283f4aebbf5b5b35c63f098d81fb0d2aeb5e9fc3be51128ab300333127077f  rskj-core-6.5.1-ARROWHEAD.module
ee4f7e684044302e3819f8c50d9b85af5b3391d14e6ed6110b98e8387a1b2837  rskj-core-6.5.1-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.5.1-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.5.1-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
