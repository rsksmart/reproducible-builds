# BitcoinJ 0.15.6-rsk-3

* Source: https://github.com/rsksmart/bitcoinj
* Tag: `v0.15.6-rsk-3`

## Build

```
$ docker build -t bitcoinj/0.15.6-rsk-3 .
```

## Verify

```
$ docker run --rm bitcoinj/0.15.6-rsk-3 sh -c 'sha256sum *'
4ecd02ec81a249b4d44367e2c1a3827ab363c052e35d71d720062194c4a7307e  bitcoinj-core-0.15.6-rsk-3-javadoc.jar
d23bf780d45a27f81a92469af7ea10860a26467eeeaf7ecb9a960b415bf5b97b  bitcoinj-core-0.15.6-rsk-3-sources.jar
92ae400ba41e9c25a2a08e257d611f8fcedc3fc13baae40663856cb13860e7fa  bitcoinj-core-0.15.6-rsk-3.jar
580f70f8ec242c90d8141d2cdd501c1b9ee11b3c70972308e8c47b4f96acf3cf  bitcoinj-core-0.15.6-rsk-3.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj/0.15.6-rsk-3 /bin/true
$ docker cp temp-container:/home/bitcoinj/ ./libs
$ docker rm temp-container
```
