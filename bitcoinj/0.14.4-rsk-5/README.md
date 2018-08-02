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
12d36aec3c974faa2e6453dcd5223a5bee872b0685b2c15e9513ebaaf9963654 /code/bitcoinj/core/target/bitcoinj-core-0.14.4-rsk-5.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-0.14.4-rsk-5 /bin/true
$ docker cp temp-container:/code/bitcoinj/core/target/bitcoinj-core-0.14.4-rsk-5.jar ./bitcoinj-core-0.14.4-rsk-5.jar
$ docker cp temp-container:/code/bitcoinj/core/pom.xml ./bitcoinj-core-0.14.4-rsk-5.pom
$ docker cp temp-container:/code/bitcoinj/pom.xml ./bitcoinj-parent-0.14.4-rsk-5.pom
$ docker rm temp-container
```
