# rskj ARROWHEAD-6.5.1

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.5.1`

## Build

```
$ docker build -t rskj/6.5.1-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.5.1-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
f4a3407f30f90a1b16b0b5731b98c086548d929a64f36e5f93fdb814ebc2462b  rskj-core-6.5.1-ARROWHEAD-all.jar
5f6a5c354309eda4794380ff007c8711efae1d735a4ab10b7a6e53a8351b9250  rskj-core-6.5.1-ARROWHEAD-sources.jar
8a9a5f36b26158353d0e4cd382246203b04b66d904c07eaaa19b1efeeef0c932  rskj-core-6.5.1-ARROWHEAD.jar
a9fbbe07cdb7fae3f84dc0db7c52c0a94a573cdf8fe9f5dbe7fffe8d1d967bfa  rskj-core-6.5.1-ARROWHEAD.module
ab2e027311d65bb3c5351c29f7f61d2ca16cdecced4db131d489d62941745d84  rskj-core-6.5.1-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.5.1-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.5.1-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
