# BitcoinJ 0.14.4-rsk-12

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-12`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-12 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-12 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-12.jar
c7089559775c62d212fe839cf5bfeb3592f4545dd41f54d2fe474cf6b8f9641a  /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-12.jar

$ docker run --rm bitcoinj-thin-0.14.4-rsk-12 sha256sum /code/bitcoinj-thin/pom.xml
e79cb080ed7569b7e6e4c1533edeb62ba9b81c784b3da9dca5d7aa473402aa46  /code/bitcoinj-thin/pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-12 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-12.jar ./bitcoinj-thin-0.14.4-rsk-11.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-12.pom
$ docker rm temp-container
```
