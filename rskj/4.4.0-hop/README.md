# rskj HOP-4.4.0

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-4.4.0`

## Build

```
$ docker build -t rskj/4.4.0-hop .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.4.0-hop sh -c 'sha256sum * | grep -v javadoc.jar'
10e82f9e4fc80487f0e0799c4082275c2360e243d12fd791cb5108a05a71f7f8  rskj-core-4.4.0-HOP-all.jar
3f4e23b9d4172572a0225b8e32f267296770832efd4acde56af7ca14c94466b1  rskj-core-4.4.0-HOP-sources.jar
4a6ac146fb03d60b9e7f0ab17302db4e821b1da8c4cc11822b9e0d33cbce2518  rskj-core-4.4.0-HOP.jar
ae3933d57088cfc9a8d6a9740309e757dcbdfeef8c9e1a0635e1f4d97f329f16  rskj-core-4.4.0-HOP.module
10fb26a9ba527996c3f5af30fcd02b0f59fac02d54a10b868f8223c28c63f042  rskj-core-4.4.0-HOP.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.4.0-hop
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.4.0-hop /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
