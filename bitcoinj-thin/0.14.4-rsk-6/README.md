# BitcoinJ 0.14.4-rsk-6

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-6`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-6 .
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-6 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-6.jar
0855ffa3254a8fb98143cd22e9b8d3a0c50346a3d08894b20dfbc4323750586f /code/bitcoinj/target/bitcoinj-thin-0.14.4-rsk-6.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-6 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-6.jar ./bitcoinj-thin-0.14.4-rsk-6.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-6.pom
$ docker rm temp-container
```
