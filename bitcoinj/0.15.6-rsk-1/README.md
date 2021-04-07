# BitcoinJ 0.15.6-rsk-1

* Source: https://github.com/rsksmart/bitcoinj
* Tag: `v0.15.6-rsk-1`

## Build

```
$ docker build -t bitcoinj-0.15.6-rsk-1 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-0.15.6-rsk-1 sha256sum /code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-1.jar
deeba926a3cd09ac4fb438630876057c7706e1ff9f9ab1fb7996b65278f25e9b  /code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-1.jar

$ docker run --rm bitcoinj-0.15.6-rsk-1 sha256sum /code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-1.pom
da074c82f2e1b0575d0a346b1444228dfdcb4367c54d531226b54268a8743ab2  /code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-1.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-0.15.6-rsk-1 /bin/true
$ docker cp temp-container:/code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-1.jar ./bitcoinj-core-0.15.6-rsk-1.jar
$ docker cp temp-container:/code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-1.pom ./bitcoinj-core-0.15.6-rsk-1.pom
$ docker rm temp-container
```
