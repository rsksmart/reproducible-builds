# BitcoinJ 0.14.4-rsk-18_4-snapshot

* Source: https://github.com/rsksmart/bitcoinj-thin
* Branch: `v18_4-SNAPSHOT`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-18_4-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-18_4-snapshot sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-18_4-SNAPSHOT.jar pom.xml'
97d343cec8fb9c0af0ed5a9b27843cf2b0932bbe7e5b43d24666782fbd15c120  bitcoinj-thin-0.14.4-rsk-18_4-SNAPSHOT.jar
d79c6b4132ebb27e0c6f1130844f41123b427f37acac076cb5425a4a3b769c41  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-18_4-snapshot /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-18_4-SNAPSHOT.jar ./bitcoinj-thin-0.14.4-rsk-18_4-SNAPSHOT.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-18_4-SNAPSHOT.pom
$ docker cp temp-container:/home/bitcoinj-thin/maven-metadata.xml ./maven-metadata.xml
$ docker rm temp-container
```
