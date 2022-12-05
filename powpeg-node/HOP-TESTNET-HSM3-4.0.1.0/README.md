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
47dae5b47151e1172d536b58a1b6055a2dfe8b15030091f09750c87584830d95  federate-node-HOP-TESTNET-HSM3-4.0.1.0-all.jar
7cc5195d95729a33de786eec4ef04be87f40d728f378a5920fe5bc1c65f096fe  federate-node-HOP-TESTNET-HSM3-4.0.1.0-javadoc.jar
bc3004f72115cac8142a53dab78b538b016603ea5b3eea356722ed9c4ec943c3  federate-node-HOP-TESTNET-HSM3-4.0.1.0-sources.jar
1e8e9aa736c8fa15b31e62ac0cfe91136d5a2271df1e5b258f08356a5ed430d4  federate-node-HOP-TESTNET-HSM3-4.0.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-testnet-hsm3-4.0.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
