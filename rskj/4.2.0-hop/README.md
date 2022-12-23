# rskj HOP-4.2.0

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-4.2.0`

## Build

```
$ docker build -t rskj/4.2.0-hop .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.2.0-hop sh -c 'sha256sum * | grep -v javadoc.jar'
556132bb0423f0ca0a101704d56daad17eaa124d4f88cf97ced8ca7ebcddb0b2  rskj-core-4.2.0-HOP-all.jar
e0544eaea2068f3ec9a99628f82b0163fc31d7be5282c925e34797e74982f826  rskj-core-4.2.0-HOP-sources.jar
42b0f44d0c612506ed39e186ffd8790fe5f775ee6bcd7d7189e01b0b9439c06d  rskj-core-4.2.0-HOP.jar
df75a9fd18556150f89467b44319573118aea440196d5e47dcb96f61bf63b5d5  rskj-core-4.2.0-HOP.module
9160b4e02eef885afc672005a33e10ced8e4b9a7792039faf7f7a86880c165b0  rskj-core-4.2.0-HOP.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.2.0-hop
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.2.0-hop /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
