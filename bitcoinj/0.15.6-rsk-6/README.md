# BitcoinJ 0.15.6-rsk-6

* Source: https://github.com/rsksmart/bitcoinj
* Tag: `v0.15.6-rsk-6`

## Build

```
$ docker build -t bitcoinj/0.15.6-rsk-6 .
```

## Verify

```
$ docker run --rm bitcoinj/0.15.6-rsk-6 sh -c 'sha256sum * | grep -v javadoc.jar'
7fa63a8d07a0856258dce2fa520579cf93237685a2dfdf642882bf9f394ef1b1  bitcoinj-core-0.15.6-rsk-6-sources.jar
f5d841932b9ae6e8c2daa4ef8031f58fa3f6f12c731bedcd4473b7396161de86  bitcoinj-core-0.15.6-rsk-6.jar
4c85d253717c89eb9b27252a5ddd7cb3e0739d31b27d2aa419eeb4fc1949ffd9  bitcoinj-core-0.15.6-rsk-6.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj/0.15.6-rsk-6 /bin/true
$ docker cp temp-container:/home/bitcoinj/bitcoinj-core-0.15.6-rsk-6.jar ./core-0.15.6-rsk-6.jar
$ docker cp temp-container:/home/bitcoinj/bitcoinj-core-0.15.6-rsk-6.pom ./core-0.15.6-rsk-6.pom
$ docker cp temp-container:/home/bitcoinj/bitcoinj-core-0.15.6-rsk-6-sources.jar ./core-0.15.6-rsk-6-sources.jar
$ docker rm temp-container
```
