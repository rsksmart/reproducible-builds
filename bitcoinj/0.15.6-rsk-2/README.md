# BitcoinJ 0.15.6-rsk-2

* Source: https://github.com/rsksmart/bitcoinj
* Tag: `TBD`

## Build

```
$ docker build -t bitcoinj-0.15.6-rsk-2 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-0.15.6-rsk-2 sha256sum /code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-2.jar
9fa6b867e6f9897e7ed9b7a775d8be78fbb7ca9080a221b26661c9725eecad1b  /code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-2.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-0.15.6-rsk-2 /bin/true
$ docker cp temp-container:/code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-2.jar ./bitcoinj-core-0.15.6-rsk-2.jar
$ docker cp temp-container:/code/bitcoinj/core/build/libs/bitcoinj-core-0.15.6-rsk-2.pom ./bitcoinj-core-0.15.6-rsk-2.pom
$ docker rm temp-container
```
