# rskj ARROWHEAD-6.3.1

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.3.1`

## Build

```
$ docker build -t rskj/6.3.1-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.3.1-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
27f088e5c7535974203bc77711a1e9bbaa258cd7e5d69cd368d8ca5529b38115  rskj-core-6.3.1-ARROWHEAD-all.jar
101e35cbaef4c3997432e561417f208f93e5121c52be506bcf2bf22357855bb8  rskj-core-6.3.1-ARROWHEAD-sources.jar
9e29606d4bd71dd0458ec3eaa61ab4003d6aecad4bf5a5a40cc32d8d6535de75  rskj-core-6.3.1-ARROWHEAD.jar
bb31e2e2b14f9a15f6c7ca2595a7817860334f38f5d7c6e146306275834b7564  rskj-core-6.3.1-ARROWHEAD.module
ad539153c8bb8d09307c4a77c9a8af062531241f6a5155c2cd21f0892da27b18  rskj-core-6.3.1-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.3.1-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.3.1-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
