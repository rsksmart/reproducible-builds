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
5eb9525a534e5e39a193f424a6c7c4e40a0462fc1c161f6bd6ee462a5c072543  federate-node-HOP-TESTNET-HSM3-4.0.1.0-all.jar 
7cc5195d95729a33de786eec4ef04be87f40d728f378a5920fe5bc1c65f096fe  federate-node-HOP-TESTNET-HMS3-4.0.1.0-javadoc.jar
aa9cdd229cc77043b96f6d60d8ae4f1bc5a0a7395308e66e531abbd8608c39ea  federate-node-HOP-TESTNET-HSM3-4.0.1.0-sources.jar
d4b41d8e90130880b4eb2e8911e826e2bbf6e3d2d93526ff4842e18c99a55b73  federate-node-HOP-TESTNET-HSM3-4.0.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-testnet-hsm3-4.0.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
