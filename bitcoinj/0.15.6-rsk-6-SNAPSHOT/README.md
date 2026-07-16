# BitcoinJ 0.15.6-rsk-6-SNAPSHOT

* Source: https://github.com/rsksmart/bitcoinj
* Branch: `testnet4-bitcoin-testnet4-setup`

## Build

```
$ docker build -t bitcoinj/0.15.6-rsk-6-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj/0.15.6-rsk-6-snapshot sh -c 'sha256sum * | grep -v javadoc.jar'
7fa63a8d07a0856258dce2fa520579cf93237685a2dfdf642882bf9f394ef1b1  bitcoinj-core-0.15.6-rsk-6-SNAPSHOT-sources.jar
f5d841932b9ae6e8c2daa4ef8031f58fa3f6f12c731bedcd4473b7396161de86  bitcoinj-core-0.15.6-rsk-6-SNAPSHOT.jar
313516f3513c2184cbdf52327fc94c4e18938a31059193315722f6b931f0e5fa  bitcoinj-core-0.15.6-rsk-6-SNAPSHOT.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj/0.15.6-rsk-6-snapshot /bin/true
$ docker cp temp-container:/home/bitcoinj/ ./libs
$ docker rm temp-container
```
