# BitcoinJ 0.14.4-rsk-16

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-16`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-16 .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-16 sh -c 'sha256sum bitcoinj-thin-0.14.4-rsk-16.jar pom.xml'
53957d6941a882f7aa33188da3dadcf96f15fa2ffd62e9130937eb84e98f11a4  bitcoinj-thin-0.14.4-rsk-16.jar
ea7726838385d7694f63622398d871b92a247b83418fe4d6cb9c6f3d5991fd3a  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-16 /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-16.jar ./bitcoinj-thin-0.14.4-rsk-16.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
