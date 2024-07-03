# BitcoinJ 0.15.6-rsk-3

* Source: https://github.com/rsksmart/bitcoinj
* Tag: `v0.15.6-rsk-3`

## Build

```
$ docker build -t bitcoinj/0.15.6-rsk-3 .
```

## Verify

```
$ docker run --rm bitcoinj/0.15.6-rsk-3 sh -c 'sha256sum * | grep -v javadoc.jar'
dea5d3f9e4cee70cde6fca8a26f9d4e975431c4b192ddade899fb0ab3bf34ecc  bitcoinj-core-0.15.6-rsk-3-sources.jar
b1759d2bd9ff18b9631aa7eb57409fe67749d5d64739cff8b7cc0160bcc0f61a  bitcoinj-core-0.15.6-rsk-3.jar
580f70f8ec242c90d8141d2cdd501c1b9ee11b3c70972308e8c47b4f96acf3cf  bitcoinj-core-0.15.6-rsk-3.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj/0.15.6-rsk-3 /bin/true
$ docker cp temp-container:/home/bitcoinj/ ./libs
$ docker rm temp-container
```
