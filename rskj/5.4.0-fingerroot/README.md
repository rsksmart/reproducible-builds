# rskj FINGERROOT-5.4.0

* Source: https://github.com/rsksmart/rskj
* Tag: `FINGERROOT-5.4.0`

## Build

```
$ docker build -t rskj/5.4.0-fingerroot .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/5.4.0-fingerroot sh -c 'sha256sum * | grep -v javadoc.jar'
ae80dd4abe7c35cffaa471b7149a34142ad2b845805686cfd5c340e19638ec9f  rskj-core-5.4.0-FINGERROOT-all.jar
3c8dbce647f20dcef1560d018bbef35ad807374057b7dca61be74f61c9af06a4  rskj-core-5.4.0-FINGERROOT-sources.jar
739d9174eb0e1773fd482bcc766ce735f949edb5dd8d87e71a4242b2b3c955f2  rskj-core-5.4.0-FINGERROOT.jar
9bccf21a0482b27aabf85f313fec2f1d132e0e7e8935edd760b61b25769a7198  rskj-core-5.4.0-FINGERROOT.module
74767f0c7c294731f83b9a9ab9191fe5bd4d9133afcc8576180e03ae1efb34d3  rskj-core-5.4.0-FINGERROOT.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/5.4.0-fingerroot
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/5.4.0-fingerroot /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
