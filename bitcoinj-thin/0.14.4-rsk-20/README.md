# BitcoinJ 0.14.4-rsk-20

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-20`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-20 .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-20 sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-20.jar pom.xml'
8328c2f125828162c64e0bfeaa6912f9c632abb93362ac98a104e633de5c71c0  bitcoinj-thin-0.14.4-rsk-20.jar
da4bdca5682714a6eea222bc0c39bf42dd4dcdc16498a489c93be77dd6f01aa0  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-20 /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-20.jar ./bitcoinj-thin-0.14.4-rsk-20.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
