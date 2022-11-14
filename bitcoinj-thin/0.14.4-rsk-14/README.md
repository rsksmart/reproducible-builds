# BitcoinJ 0.14.4-rsk-14

* Source: https://github.com/rsksmart/bitcoinj-thin
* Tag: `v0.14.4-rsk-14`

## Build

```
$ docker build -t bitcoinj-thin-0.14.4-rsk-14 . --no-cache
```

## Verify

```
$ docker run --rm bitcoinj-thin-0.14.4-rsk-14 sha256sum /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-14.jar
76c16c354cdbe1844ab7501eb536b3f8da31c8679f1765813af4748e7af31abe  /code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-14.jar

$ docker run --rm bitcoinj-thin-0.14.4-rsk-14 sha256sum /code/bitcoinj-thin/pom.xml
3e650b44d944cbbf886f2b04fb03f9d829a0b73c084d602ea481ff8571fba8cb  /code/bitcoinj-thin/pom.xml
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bitcoinj-thin-0.14.4-rsk-14 /bin/true
$ docker cp temp-container:/code/bitcoinj-thin/target/bitcoinj-thin-0.14.4-rsk-14.jar ./bitcoinj-thin-0.14.4-rsk-14.jar
$ docker cp temp-container:/code/bitcoinj-thin/pom.xml ./bitcoinj-thin-0.14.4-rsk-14.pom
$ docker rm temp-container
```
