# BitcoinJ 0.14.4-rsk-7

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-7`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-7 .
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-7 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-7.jar
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa /code/bitcoinj/target/bitcoinj-thin-0.14.4-rsk-7.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-7 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-7.jar ./bitcoinj-thin-0.14.4-rsk-7.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-7.pom
$ docker rm temp-container
```
