# BitcoinJ 0.15.6-rsk-4-snapshot

* Source: https://github.com/rsksmart/bitcoinj
* Tag: `v0.15.6-rsk-4-snapshot`

## Build

```
$ docker build -t bitcoinj/0.15.6-rsk-4-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj/0.15.6-rsk-4-snapshot sh -c 'sha256sum *'
4ecd02ec81a249b4d44367e2c1a3827ab363c052e35d71d720062194c4a7307e  bitcoinj-core-0.15.6-rsk-4-SNAPSHOT-javadoc.jar
525146a7eb307aa0a7d1df4d81244d73f3a58df0f7e32fbf38a372aa58e3a04a  bitcoinj-core-0.15.6-rsk-4-SNAPSHOT-sources.jar
d35e6f8a0c8e8cf37a68181f8f2a8316cc3baf9b9e1b808e820944eb325cd9f1  bitcoinj-core-0.15.6-rsk-4-SNAPSHOT.jar
1f95d3ac43a12587a83ec0cc350f5a0c918fdfa4ee62874937800322969c470e  bitcoinj-core-0.15.6-rsk-4-SNAPSHOT.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj/0.15.6-rsk-4-snapshot /bin/true
$ docker cp temp-container:/home/bitcoinj/ ./libs
$ docker rm temp-container
```
