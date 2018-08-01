# BitcoinJ 0.14.4-rsk-5

* Source: https://github.com/rsksmart/bitcoinj
* Tag: `v0.14.4-rsk-5`

## Build

```
$ docker build -t bitcoinj-0.14.4-rsk-5 .
```

## Verify

```
$ docker run --rm bitcoinj-0.14.4-rsk-5 sha256sum /code/bitcoinj/core/target/bitcoinj-core-0.14.4-rsk-5.jar
b5529a9368ebe0462fc978475b53e23e15c429b9d729c95f3152601fcfcfca5d  /code/bc-java/build/artifacts/jdk1.5/jars/bclcrypto-jdk15on-159.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-0.14.4-rsk-5 /bin/true
$ docker cp temp-container:/code/bitcoinj/core/target/bitcoinj-core-0.14.4-rsk-5.jar ./bitcoinj-core-0.14.4-rsk-5.jar
$ docker cp temp-container:/code/bitcoinj/core/pom.xml ./bitcoinj-core-0.14.4-rsk-5.pom
$ docker cp temp-container:/code/bitcoinj/pom.xml ./bitcoinj-parent-0.14.4-rsk-5.pom
$ docker rm temp-container
```
