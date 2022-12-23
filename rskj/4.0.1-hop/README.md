# rskj HOP-4.0.1

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-4.0.1`

## Build

```
$ docker build -t rskj/4.0.1-hop .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.0.1-hop sh -c 'sha256sum *'
0ed5aa42ba590be6d4947ac48362af57e46f4f228d554a1c26f79e84a0784dc1  rskj-core-4.0.1-HOP-all.jar
352cb25b9426c81e074d016355a354d1a652edf5b123f9abd168ed1e38a3a8e6  rskj-core-4.0.1-HOP-javadoc.jar
088253e98f83223603a88096bb74cfbdd2b221d0ce6254d18e734c621d42d9de  rskj-core-4.0.1-HOP-sources.jar
9132bf0c12f82faf2e7f723817ad94375c2a4f7e7358752f6ea490efe5f0dfa9  rskj-core-4.0.1-HOP.jar
7aff811a3592825e71077d76109722594cdb3c6d6abd567f91960d686946b0f3  rskj-core-4.0.1-HOP.module
d13422e9fa8c8bc3f8ee9f0792b43223bf52c68f860e3f12d1344014aa7c2201  rskj-core-4.0.1-HOP.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.0.1-hop
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.0.1-hop /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
