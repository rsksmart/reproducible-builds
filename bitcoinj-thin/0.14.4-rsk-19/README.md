# BitcoinJ 0.14.4-rsk-19

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-19`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-19 .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-19 sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-19.jar pom.xml'
254eb586b024f2733069b3a091048457f034da5a9d96aa0f5e98b367476eac2f  bitcoinj-thin-0.14.4-rsk-19.jar
c649fee9cad17bdeb8adf09a1b2bd0c9bc90f1f6248d32da3f08f230dcbf4730  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-19 /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-19.jar ./bitcoinj-thin-0.14.4-rsk-19.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
