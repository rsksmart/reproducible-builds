# BitcoinJ 0.14.4-rsk-10

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-10`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-10 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-10 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-10.jar
dea3df78f99af2fd44108d37a832885d2631ea59d4a933a42c95832997d711cb  /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-10.jar

$ docker run --rm bitcoinj-thin-0.14.4-rsk-10 sha256sum /code/bitcoinj-thin/pom.xml
15731d1a14720c34b9f49686ff5c4167c52dc616fe13c342acfc9d58f227f455  /code/bitcoinj-thin/pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-10 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-10.jar ./bitcoinj-thin-0.14.4-rsk-10.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-10.pom
$ docker rm temp-container
```
