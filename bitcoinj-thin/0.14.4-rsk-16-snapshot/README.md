# BitcoinJ 0.14.4-rsk-16-snapshot

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-16-snapshot`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-16-snapshot .
```

## Verify

```
docker run --rm bitcoinj-thin/0.14.4-rsk-16-snapshot sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-16-SNAPSHOT.jar pom.xml'
866033295b9a55aa5b4be4175d68fc95e25cc86f458e670f1e3eb28942414a5c  bitcoinj-thin-0.14.4-rsk-16-SNAPSHOT.jar
b219c10869bbdc7ff95a50e2665fb292afc0be25335f7e6793ac69ffa174deec  pom.xml

```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-16-SNAPSHOT /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-16-snapshot.jar ./bitcoinj-thin-0.14.4-rsk-16-SNAPSHOT.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
