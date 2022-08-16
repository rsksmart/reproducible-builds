# rskj HOP-4.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-4.1.0`

## Build

```
$ docker build -t rskj/4.1.0-hop .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.1.0-hop sh -c 'sha256sum * | grep -v javadoc.jar'
d5ec4c766b184d13dde8c4cdef6f30481731b72c562c087bfd0c223d5709a2e6  rskj-core-4.1.0-HOP-all.jar
3f01b57e7e25f038ff9b59006dc9fe1dc9e2105cd05ac6c6b617771a9d8179c9  rskj-core-4.1.0-HOP-sources.jar
65f3b183d72166e3cce209e6546b687e9b10b9c9e0750e4a4a7f1bb28f957fed  rskj-core-4.1.0-HOP.jar
a7df6994466abffeac61405984be4237f937dd25ce0fd1c42fed1c387b2835de  rskj-core-4.1.0-HOP.module
7fdd10c4ef368fd5997f381454086645f22349c98eba9bc12b445f402839e705  rskj-core-4.1.0-HOP.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.1.0-hop
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.1.0-hop /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
