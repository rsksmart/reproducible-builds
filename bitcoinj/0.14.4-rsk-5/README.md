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
7d03ba37df4d0ddc4ea40d56554324c6f18062a930edadb0a1b3acbbbea28efc  /code/bc-java/build/artifacts/jdk1.5/jars/bclcrypto-jdk15on-159.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-0.14.4-rsk-5 /bin/true
$ docker cp temp-container:/code/bitcoinj/core/target/bitcoinj-core-0.14.4-rsk-5.jar ./bitcoinj-core-0.14.4-rsk-5.jar
$ docker cp temp-container:/code/bitcoinj/core/pom.xml ./bitcoinj-core-0.14.4-rsk-5.pom
$ docker cp temp-container:/code/bitcoinj/pom.xml ./bitcoinj-parent-0.14.4-rsk-5.pom
$ docker rm temp-container
```
