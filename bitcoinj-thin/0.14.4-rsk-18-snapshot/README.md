# BitcoinJ 0.14.4-rsk-18-snapshot

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-18-snapshot`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-18-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-18-snapshot sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-18-SNAPSHOT.jar pom.xml'
f7912ed60b3aec5d56e8b7c60d1a09e9b3e79d53adc13930c3abc95094f0ba50  bitcoinj-thin-0.14.4-rsk-18-SNAPSHOT.jar
1bd249e359760cf27f67ba18480cbbec87b48ae7c52e1d710ae6a9eb63399ed9  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-18-snapshot /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-18-SNAPSHOT.jar ./bitcoinj-thin-0.14.4-rsk-18-SNAPSHOT.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-18-SNAPSHOT.pom
$ docker cp temp-container:/home/bitcoinj-thin/maven-metadata.xml ./maven-metadata.xml
$ docker rm temp-container
```
