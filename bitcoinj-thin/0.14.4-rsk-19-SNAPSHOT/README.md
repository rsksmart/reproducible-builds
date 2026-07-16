# BitcoinJ 0.14.4-rsk-19-snapshot

* Source: https://github.com/rsksmart/bitcoinj-thin
* Branch: `testnet4-bitcoin-testnet4-setup`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-19-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-19-snapshot sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-19-SNAPSHOT.jar pom.xml'
e2ee87b5ac4963f733b0321fd4f3e79537a943dcb84e2cc8d7b23e782e1731b7  bitcoinj-thin-0.14.4-rsk-19-SNAPSHOT.jar
04293d924e21cfbcb50e4250e66f5a7ccdf692f269b873d9f8f5005c8ddd1fa9  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-19-snapshot /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-19-SNAPSHOT.jar ./bitcoinj-thin-0.14.4-rsk-19-SNAPSHOT.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
