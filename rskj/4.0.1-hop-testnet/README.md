# rskj HOP-TESTNET-4.0.1

* Source: https://github.com/rsksmart/rskj
* Tag: `HOP-TESTNET-4.0.1`

## Build

```
$ docker build -t rskj/4.0.1-hop-testnet .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/4.0.1-hop-testnet sh -c 'sha256sum *'
1dfb2936f7ae0d8bad51607c1df18a9ad370a28ba99cae4e27cb4c13a6116719  rskj-core-4.0.1-HOP-TESTNET-all.jar
7c35a67deaf1a03f209e0022126f48762f384c1dbb4442c9cb61102bb0dc0d17  rskj-core-4.0.1-HOP-TESTNET-javadoc.jar
d47446ad63d2bdfd74bc34522b2a66242c3768d21b0aead530003d7b202904e7  rskj-core-4.0.1-HOP-TESTNET-sources.jar
b3f3dffe40da923397399f1ac55d5daeb1494c4718be9e4c1c93a3301e20fe14  rskj-core-4.0.1-HOP-TESTNET.jar
bd72b7ef07cb40290b46bd56f34a1275c3a7effc27cb832de4733b5b1761cdfb  rskj-core-4.0.1-HOP-TESTNET.module
5346f14af0d7c51fb093dce8c387e3d9a413a42225e8c181929da7f2512a6e3c  rskj-core-4.0.1-HOP-TESTNET.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/4.0.1-hop-testnet
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/4.0.1-hop-testnet /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
