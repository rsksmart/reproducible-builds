# rskj IRIS-3.3.0

* Source: https://github.com/rsksmart/rskj
* Tag: `IRIS-3.3.0`

## Build

```
$ docker build -t rskj/3.3.0-iris .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
docker run --rm rskj/3.3.0-iris sh -c 'sha256sum rskj-core-3.3.0-IRIS-all.jar rskj-core-3.3.0-IRIS-sources.jar rskj-core-3.3.0-IRIS.jar rskj-core-3.3.0-IRIS.pom rskj-core-3.3.0-IRIS.module'
cce6c949251d1ee6d9ab8bf1d29e026778a846f048a854ca5ef114000b05f079  rskj-core-3.3.0-IRIS-all.jar
b7d34b2cbfd2f0947a863af62f9ecf9de3eee2de192f3cb122dc6755bb99f577  rskj-core-3.3.0-IRIS-sources.jar
c6fdc30922546ed131f5765bd6c9bd6bdbe4e5c512db38b6f108c666720a4431  rskj-core-3.3.0-IRIS.jar
f0ed9c07320c0d1631b786f3773cdc0ce9e128ea0e7e4539f300275adf97f3d9  rskj-core-3.3.0-IRIS.pom
aed7c15b5259c162c0810d0feb0f3f7671de34a53e270d98e3c7fe7fc3f0b47a  rskj-core-3.3.0-IRIS.module
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/3.3.0-iris
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/3.3.0-iris /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
