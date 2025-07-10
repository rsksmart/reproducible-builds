# rskj LOVELL-7.2.0

* Source: https://github.com/rsksmart/rskj
* Tag: `LOVELL-7.2.0`

## Build

```
$ docker build -t rskj/7.2.0-lovell .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/7.2.0-lovell sh -c 'sha256sum * | grep -v javadoc.jar'
1d27057a287d49e88a8d0bf981a2d091fd34317f7fc4e6abbdde2c89f0891e47  rskj-core-7.2.0-LOVELL-all.jar
927876fb600e9c0f19750b6dafd478470430d270a146b1aeba3d6956f7306688  rskj-core-7.2.0-LOVELL-sources.jar
818f7e12798fa12475e0eb878ea755ffa75d0c19fb7ef9f5f44990d3371c0404  rskj-core-7.2.0-LOVELL.jar
7d4964d0a710fc2eeb373195021ca24fac0f82e92e8f2e657d55044a3e0bea5c  rskj-core-7.2.0-LOVELL.module
7a8d7bf03d6f00eb3131510823e0c93daba54bcdba0f627b19021171ec8977c6  rskj-core-7.2.0-LOVELL.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/7.2.0-lovell
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/7.2.0-lovell /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
``` 