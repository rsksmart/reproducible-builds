# rskj HOP-4.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-4.0.0`

## Build

```
$ docker build -t rskj/4.0.0-hop .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.0.0-hop sh -c 'sha256sum *'
69c5c385986400bebdb2b57406bdb27ba1c19fa7e095000e56ec3a521e86352e  rskj-core-4.0.0-HOP-all.jar
3d4c8311c447a111574492bb76ee655b783fd3be97bf4c44478e4eb365c2188f  rskj-core-4.0.0-HOP-javadoc.jar
2fd608f667591138ea75bbc8e0a43c642df45c61ec76b6494b2087d608bb9b8b  rskj-core-4.0.0-HOP-sources.jar
a32e31a695ad73198e55474cce4db1b26d71785533a1127c2ddb1f13c472e2c3  rskj-core-4.0.0-HOP.jar
687fc1cb5945c2fc6f0c8f6a011d25ef27c632fc3e3a910f253dd72c860dd322  rskj-core-4.0.0-HOP.module
ef63f39234fa400d49e51c588f6466167dbc5332e7e80fc78ecc3d7899631e83  rskj-core-4.0.0-HOP.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.0.0-hop
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.0.0-hop /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
