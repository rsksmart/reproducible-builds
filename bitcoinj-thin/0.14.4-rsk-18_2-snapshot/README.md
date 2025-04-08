# BitcoinJ 0.14.4-rsk-18_2-snapshot

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-18_2-snapshot`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-18_2-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-18_2-snapshot sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-18_2-SNAPSHOT.jar pom.xml'
8dfdd3e3a44d31f7aea14f1be404200b34b822499542c5c731e5420f38f73b1a  bitcoinj-thin-0.14.4-rsk-18_2-SNAPSHOT.jar
874ee3e599cd52d12217c4163c02a75f97358c4ece1a825e3e228f21df4c440a  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-18_2-snapshot /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-18_2-SNAPSHOT.jar ./bitcoinj-thin-0.14.4-rsk-18_2-SNAPSHOT.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-18_2-SNAPSHOT.pom
$ docker cp temp-container:/home/bitcoinj-thin/maven-metadata.xml ./maven-metadata.xml
$ docker rm temp-container
```
