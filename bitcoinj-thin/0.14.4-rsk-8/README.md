# BitcoinJ 0.14.4-rsk-8

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-8`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-8 .
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-8 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-8.jar
122c141afd341dd068e13d03a729c83428616e2f4b1cac60ca04c009e87dcedf /code/bitcoinj/target/bitcoinj-thin-0.14.4-rsk-8.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-8 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-8.jar ./bitcoinj-thin-0.14.4-rsk-8.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-8.pom
$ docker rm temp-container
```
