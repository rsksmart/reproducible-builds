# rskj HOP-TESTNET-4.1.1

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-TESTNET-4.1.1`

## Build

```
$ docker build -t rskj/4.1.1-hop-testnet .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.1.1-hop-testnet sh -c 'sha256sum * | grep -v javadoc.jar'
6999deb8b6266cd64e2f408bf3b748904348083f6a678b92cf7b43223f643d6c  rskj-core-4.1.1-HOP-TESTNET-all.jar
ce1fa58325d55c89fc0b553283a6536f11fc9fddadf93a5b8d8e08562ea6331b  rskj-core-4.1.1-HOP-TESTNET-sources.jar
d31fd099d26fd2edd1f9fa726e2d3e3a5cbaaec6ca4c803b1bc51cacd704603f  rskj-core-4.1.1-HOP-TESTNET.jar
9c689f5476c36e64969d80cacdbb7951d5fbe16579dc482b41177c94d0d25c2a  rskj-core-4.1.1-HOP-TESTNET.module
af6ecff39a2eeb3384868071606cc42cc434786639c9268b959fe7063d93bf09  rskj-core-4.1.1-HOP-TESTNET.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.1.1-hop-testnet
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.1.1-hop-testnet /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
