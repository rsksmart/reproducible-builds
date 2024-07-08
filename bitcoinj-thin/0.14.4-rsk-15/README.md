# BitcoinJ 0.14.4-rsk-15

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-15`

## Build

```
$ docker build -t bitcoinj-thin/0.14.4-rsk-15 .
```

## Verify

```
$ docker run --rm bitcoinj-thin/0.14.4-rsk-15 sh -c 'sha256sum bitcoinj-thin-* pom.xml'
abe3554a9241b2cb61a5fb6d28b1965228125b2da57ad953de46bddee6574649  bitcoinj-thin-0.14.4-rsk-15-bundled.jar
df8cb45be7161292b0572b644b7e474793cae1c4da7c2aec262e870e7c0007f3  bitcoinj-thin-0.14.4-rsk-15-javadoc.jar
871b008d5b148f066a6e4d46b154a96532e22b7b6faff6e28821fa4e7b078346  bitcoinj-thin-0.14.4-rsk-15.jar
deda61ace1b697c488c8acddbc60fcc55be75df9097c8cd2dad87f8c6afa21f2  pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin/0.14.4-rsk-15 /bin/true
$ docker cp temp-container:/home/bitcoinj-thin/bitcoinj-thin-0.14.4-rsk-15.jar ./bitcoinj-thin-0.14.4-rsk-15.jar
$ docker cp temp-container:/home/bitcoinj-thin/pom.xml ./pom.xml
$ docker rm temp-container
```
