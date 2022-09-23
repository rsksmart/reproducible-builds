# BitcoinJ 0.14.4-rsk-13

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-13`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-13 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-13 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-13.jar
2579349dbb04b3ddbb8b7d952de194c5a3178526853ad9d6fa64668becf14ba2  /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-13.jar

$ docker run --rm bitcoinj-thin-0.14.4-rsk-13 sha256sum /code/bitcoinj-thin/pom.xml
d11c89404ff1a02e895a602a04103c35a4ba8fd9c90289bbe0757af55b48119e  /code/bitcoinj-thin/pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-13 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-13.jar ./bitcoinj-thin-0.14.4-rsk-13.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-13.pom
$ docker rm temp-container
```
