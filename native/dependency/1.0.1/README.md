# native 1.0.1

* Source: https://github.com/rsksmart/native
* Tag: `1.0.1`

## Build

```
$ docker build -t native-1.0.1-reproducible .
```

The build will print a hash. It should match
```
a73f028ee48a70d7fbcc15f7384d15384453c201c85c063974e9a3dad1ab3051  build/libs/native-1.0.1-javadoc.jar
c40a2467a2e2299be18206a3abd1f9ff4ac2d8ac6c9d9e2cecefb3bff4dc5308  build/libs/native-1.0.1-sources.jar
28012193abba5638493d6023f4c937307ec10470b4c4fb3bd92ad3d687315cf0  build/libs/native-1.0.1.jar
34c12e3819b63ff2f4bb7f61cae87f60ea328b68bbe59d5eed9af43e0191b792  build/libs/native-1.0.1.pom
```

If you had already generated this reproducible build prior to its retag, please add `--no-cache` parameter to the build command to ensure the image regeneration. 


## Verify

If you want to verify the hash without rebuilding the image
```
$ docker run --rm native-1.0.1-reproducible sha256sum /code/native/build/libs/native-1.0.1-javadoc.jar
a73f028ee48a70d7fbcc15f7384d15384453c201c85c063974e9a3dad1ab3051  build/libs/native-1.0.1-javadoc.jar

$ docker run --rm native-1.0.1-reproducible sha256sum /code/native/build/libs/native-1.0.1-sources.jar
c40a2467a2e2299be18206a3abd1f9ff4ac2d8ac6c9d9e2cecefb3bff4dc5308  build/libs/native-1.0.1-sources.jar

$ docker run --rm native-1.0.1-reproducible sha256sum /code/native/build/libs/native-1.0.1.jar
28012193abba5638493d6023f4c937307ec10470b4c4fb3bd92ad3d687315cf0  build/libs/native-1.0.1.jar

$ docker run --rm native-1.0.1-reproducible sha256sum /code/native/build/libs/native-1.0.1.pom
34c12e3819b63ff2f4bb7f61cae87f60ea328b68bbe59d5eed9af43e0191b792  build/libs/native-1.0.1.pom
```

## (Optional) Extract the jar from image

```
$ docker run --name temp-container native-1.0.1-reproducible /bin/true
$ docker cp temp-container://code/native/build/libs/native-1.0.1-javadoc.jar ./native-1.0.1-javadoc.jar
$ docker cp temp-container://code/native/build/libs/native-1.0.1-sources.jar ./native-1.0.1-sources.jar
$ docker cp temp-container://code/native/build/libs/native-1.0.1.jar ./native-1.0.1.jar
$ docker cp temp-container://code/native/build/libs/native-1.0.1.pom ./native-1.0.1.pom
$ docker rm temp-container
```
