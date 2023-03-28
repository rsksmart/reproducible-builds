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
c89f53f64379ec2a6612ff69f94d06a0b06e1b366a9795883f2dd3d1b32387d2  rskj-core-4.4.0-HOP-all.jar
a07bcbbf2d0d7c97d50e0a8d56d483ad10033205d4517d917901a5cd2d6d4ae0  rskj-core-4.4.0-HOP-sources.jar
b04009ccfdeeaea8283039ad576954a42f621fe450752baea54a72f0e5595fe2  rskj-core-4.4.0-HOP.jar
cf5ebcf31779384f6e3afc886a16cbee1bfe07cdbf733bbfc88df7ba34b19859  rskj-core-4.4.0-HOP.module
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
