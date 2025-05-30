# BitcoinJ 0.14.4-rsk-18_3-snapshot

* Source: https://github.com/rsksmart/bitcoinj-thin
* Branch: `segwit_compatible_powpeg_integration_part2`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-18_3-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-18_3-snapshot sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-18_3-SNAPSHOT.jar pom.xml'
a7c41cd7297919f482529dfbba9d6407745c1d1b92778c6c7120ec16dec82e5c  bitcoinj-thin-0.14.4-rsk-18_3-SNAPSHOT.jar
3c1d5b70dd70be9e8862038029039b417210778ff0a406ecc48092012933a73d  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-18_3-snapshot /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-18_3-SNAPSHOT.jar ./bitcoinj-thin-0.14.4-rsk-18_3-SNAPSHOT.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-18_3-SNAPSHOT.pom
$ docker cp temp-container:/home/bitcoinj-thin/maven-metadata.xml ./maven-metadata.xml
$ docker rm temp-container
```
