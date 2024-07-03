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
3bb761ef2b973a678b4181a414441f6b297d79aea5076c7e3c57faddb1847df1  bitcoinj-core-0.15.6-rsk-3-sources.jar
92ae400ba41e9c25a2a08e257d611f8fcedc3fc13baae40663856cb13860e7fa  bitcoinj-core-0.15.6-rsk-3.jar
580f70f8ec242c90d8141d2cdd501c1b9ee11b3c70972308e8c47b4f96acf3cf  bitcoinj-core-0.15.6-rsk-3.pom
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj/0.15.6-rsk-3 /bin/true
$ docker cp temp-container:/home/bitcoinj/ ./libs
$ docker rm temp-container
```
