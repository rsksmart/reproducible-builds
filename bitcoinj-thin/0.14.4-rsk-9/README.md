# BitcoinJ 0.14.4-rsk-9

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-9`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-9 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-9 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-9.jar
77f2cbf36f4661530160184f48460d4f81b228e39f58fbc2735ad4b511eb5ec2  /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-9.jar

$ docker run --rm bitcoinj-thin-0.14.4-rsk-9 sha256sum /code/bitcoinj-thin/pom.xml
dcbc69537534ad3f4e46fd80520eb6547257390e1f97541277c9c53c13a9339d  /code/bitcoinj-thin/pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-9 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-9.jar ./bitcoinj-thin-0.14.4-rsk-9.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-9.pom
$ docker rm temp-container
```
