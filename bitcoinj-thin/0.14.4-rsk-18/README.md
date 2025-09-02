# BitcoinJ 0.14.4-rsk-18

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-18`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-18 .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-18 sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-18.jar pom.xml'
d0adf8892013a2edb812ff6715a6767db72fec67a656acd6069fd1251a5918a8  bitcoinj-thin-0.14.4-rsk-18.jar
ae431c4b1202061d3c73a327e40311bec846b34c26195e7c2809ed3a06133908  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-18 /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-18.jar ./bitcoinj-thin-0.14.4-rsk-18.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
