# native 1.0.0

* Source: https://github.com/rsksmart/native
* Tag: `1.0.0`

## Build

```
$ docker build -t native-1.0.0-reproducible .
```

The build will print a hash. It should match
```
a1902dac3e0ee55c54820bbd3913d1c1bbe85d8c8efb3092b50451605ee87f98  build/libs/native-1.0.0-javadoc.jar
371b1539efd34cdce20d63c5416facdd3fa853abc36fd8a192e501c32d2d528d  build/libs/native-1.0.0-sources.jar
248394158f35d5485ceb3e0312ce60b686381a1000a9cfacee10bf0ff3415596  build/libs/native-1.0.0.jar
5bae503ee4b32f8f2941985a05ae00229f74a8f4e635d3698e5ec1be1956224b  build/libs/native-1.0.0.pom
```

If you had already generated this reproducible build prior to its retag, please add `--no-cache` parameter to the build command to ensure the image regeneration. 


## Verify

If you want to verify the hash without rebuilding the image
```
$ docker run --rm native-1.0.0-reproducible sha256sum /code/native/build/libs/native-1.0.0-javadoc.jar
a1902dac3e0ee55c54820bbd3913d1c1bbe85d8c8efb3092b50451605ee87f98  build/libs/native-1.0.0-javadoc.jar

$ docker run --rm native-1.0.0-reproducible sha256sum /code/native/build/libs/native-1.0.0-sources.jar
371b1539efd34cdce20d63c5416facdd3fa853abc36fd8a192e501c32d2d528d  build/libs/native-1.0.0-sources.jar

$ docker run --rm native-1.0.0-reproducible sha256sum /code/native/build/libs/native-1.0.0.jar
248394158f35d5485ceb3e0312ce60b686381a1000a9cfacee10bf0ff3415596  build/libs/native-1.0.0.jar

$ docker run --rm native-1.0.0-reproducible sha256sum /code/native/build/libs/native-1.0.0.pom
5bae503ee4b32f8f2941985a05ae00229f74a8f4e635d3698e5ec1be1956224b  build/libs/native-1.0.0.pom
```

## (Optional) Extract the jar from image

```
$ docker run --name temp-container native-1.0.0-reproducible /bin/true
$ docker cp temp-container://code/native/build/libs/native-1.0.0-javadoc.jar ./native-1.0.0-javadoc.jar
$ docker cp temp-container://code/native/build/libs/native-1.0.0-sources.jar ./native-1.0.0-sources.jar
$ docker cp temp-container://code/native/build/libs/native-1.0.0.jar ./native-1.0.0.jar
$ docker cp temp-container://code/native/build/libs/native-1.0.0.pom ./native-1.0.0.pom
$ docker rm temp-container
```
