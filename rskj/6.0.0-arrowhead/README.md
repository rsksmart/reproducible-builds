# rskj ARROWHEAD-6.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.0.0`

## Build

```
$ docker build -t rskj/6.0.0-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.0.0-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
d3026daa1c4aa56741b4e45bb429d8d16d9bda664ebe3aa4394fe1fa13371769  rskj-core-6.0.0-ARROWHEAD-all.jar
2510c8b2cc99300d2c3ca9765bd60847aca8b14da57a51c3eb080ab448f1db30  rskj-core-6.0.0-ARROWHEAD-sources.jar
7012f7e29bf60bf6bcc072154978c58dbed07a043ce3218fd97035476151e717  rskj-core-6.0.0-ARROWHEAD.jar
4b04ecb033c633c912ed5222e82f20c88d2593abc2fdf585771a818eb63c685d  rskj-core-6.0.0-ARROWHEAD.module
984dc3bc3596623b74f457f96617765c685567cdde3c7f4a7279f0177ff5d978  rskj-core-6.0.0-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.0.0-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.0.0-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
