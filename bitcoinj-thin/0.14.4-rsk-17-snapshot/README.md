# BitcoinJ 0.14.4-rsk-17-snapshot

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-17-snapshot`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-17-snapshot .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-17-snapshot sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-17-SNAPSHOT.jar pom.xml'
4a085bbec4b82e9e4a688705c9889530498c20fb0eb07c0f394420fa97519d62  bitcoinj-thin-0.14.4-rsk-17-SNAPSHOT.jar
fb17381fcd0f10d168b442abbe1e00ba069cdd72ea6fce51545234e051f88a33  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-17-SNAPSHOT /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-17-SNAPSHOT.jar ./bitcoinj-thin-0.14.4-rsk-17-SNAPSHOT.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
