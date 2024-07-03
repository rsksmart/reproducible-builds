# rskj ARROWHEAD-6.3.0

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.3.0`

## Build

```
$ docker build -t rskj/6.3.0-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.3.0-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
136ce6e5f55da6346ce716484ff0a49c8f5ef5c00142e124f811bc49e9b25217  rskj-core-6.3.0-ARROWHEAD-all.jar
0d684f8ed0c9a21af3f0023d3ddbcc06948c0a01b5a21c0d139b1bd4fbb8b2de  rskj-core-6.3.0-ARROWHEAD-sources.jar
2f74ec8d1c74d9dd20a4c24ee8579a8673d23045cd0b7a32ea4803e638a866d0  rskj-core-6.3.0-ARROWHEAD.jar
62ffd85fe346ebe4d806251f38b2d24c22324bda894afca50666779b64ddfa84  rskj-core-6.3.0-ARROWHEAD.module
af87a67835100f049adc0944fdcf8e32a1aab8009b9ceaa82c24d9bef80809c5  rskj-core-6.3.0-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.3.0-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.3.0-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
