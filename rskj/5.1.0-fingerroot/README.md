# rskj FINGERROOT-5.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `FINGERROOT-5.1.0`

## Build

```
$ docker build -t rskj/5.1.0-fingerroot .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/5.1.0-fingerroot sh -c 'sha256sum * | grep -v javadoc.jar'
0c0707d01d14c7bef5a53407aace8b2a637d42964f9847b14aa38e2088e5cf3b  rskj-core-5.1.0-FINGERROOT-all.jar
6132a2c099433b7da1f67051bd4941590ff5446037aa217998b0db623466a07d  rskj-core-5.1.0-FINGERROOT-sources.jar
ed3d127e88237e7acd03d4d9122e1c212500f8a990cb9e70a28ac69802a34da8  rskj-core-5.1.0-FINGERROOT.jar
4a3d4f8da5f9878faabf87ea34f4269f8d145ecf0ac2d942f5081c874877d193  rskj-core-5.1.0-FINGERROOT.module
fda9b2a1d0e1bc82a48335631454bbc20656240b7cc5eeb911573758241302f0  rskj-core-5.1.0-FINGERROOT.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/5.1.0-fingerroot
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/5.1.0-fingerroot /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
