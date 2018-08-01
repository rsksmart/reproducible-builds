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
76f0ce83a5af68c2282bb93444b7c88f02c17e16ac0ba5c373a0b2be7330de99  /code/bitcoinj/core/target/bitcoinj-core-0.14.4-rsk-5.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-0.14.4-rsk-5 /bin/true
$ docker cp temp-container:/code/bitcoinj/core/target/bitcoinj-core-0.14.4-rsk-5.jar ./bitcoinj-core-0.14.4-rsk-5.jar
$ docker cp temp-container:/code/bitcoinj/core/pom.xml ./bitcoinj-core-0.14.4-rsk-5.pom
$ docker cp temp-container:/code/bitcoinj/pom.xml ./bitcoinj-parent-0.14.4-rsk-5.pom
$ docker rm temp-container
```
