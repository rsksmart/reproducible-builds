# BitcoinJ 0.14.4-rsk-11

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-11`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-11 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-11 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-11.jar
7c791512ae18f5adec0b7f18ba49ab7c6cddac334b48816a532eceec0f44e10b  /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-11.jar

$ docker run --rm bitcoinj-thin-0.14.4-rsk-11 sha256sum /code/bitcoinj-thin/pom.xml
b58375898eb88ed528d29cb337c1d3275ee93b7a9b5572633281eca94104c5fb  /code/bitcoinj-thin/pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-11 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-11.jar ./bitcoinj-thin-0.14.4-rsk-11.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-11.pom
$ docker rm temp-container
```
