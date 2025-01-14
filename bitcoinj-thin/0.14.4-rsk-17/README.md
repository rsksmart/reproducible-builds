# BitcoinJ 0.14.4-rsk-17

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-17`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-17 .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-17 sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-17.jar pom.xml'
beff6002e72162984daa3e7016b1a6fb6d372e5cfb14101a50d150c0adfbda71  bitcoinj-thin-0.14.4-rsk-17.jar
32fca4aac555f60d824cda58f69e64a7641f60dbbf5ec733966dbe2ded3214d7  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-17 /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-17.jar ./bitcoinj-thin-0.14.4-rsk-17.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
