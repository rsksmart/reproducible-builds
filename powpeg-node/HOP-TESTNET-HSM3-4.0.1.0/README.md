# powpeg-node HOP-TESTNET-HSM3-4.0.1.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-TESTNET-HSM3-4.0.1.0`

## Build

```
$ docker build -t powpeg-node/hop-testnet-hsm3-4.0.1.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-testnet-hsm3-4.0.1.0 bash -c 'sha256sum *'
ef5659aa32cd8bde916b16edf2f6364c1d730aff13cbf39a5ffd86160c7a91ee  federate-node-HOP-TESTNET-HSM3-4.0.1.0-all.jar
7cc5195d95729a33de786eec4ef04be87f40d728f378a5920fe5bc1c65f096fe  federate-node-HOP-TESTNET-HSM3-4.0.1.0-javadoc.jar
0ddb3699420c4afe5855d28d33fd23d01c0981bd33e1ade505fd4836dc2046e2  federate-node-HOP-TESTNET-HSM3-4.0.1.0-sources.jar
479a70dde55fb81ddbd1e3e235363e20a8a8825dbdeff9a5a77bc9ecc4802a0d  federate-node-HOP-TESTNET-HSM3-4.0.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-testnet-hsm3-4.0.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
