# BitcoinJ 0.14.4-rsk-5

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-5`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-5 .
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-5 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-5.jar
dd2cc70c2b37c2d76467bbc2bc69c926df388181ccb9aa333ec2b6b433ea1490 /code/bitcoinj/target/bitcoinj-thin-0.14.4-rsk-5.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-5 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-5.jar ./bitcoinj-thin-0.14.4-rsk-5.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-5.pom
$ docker rm temp-container
```
