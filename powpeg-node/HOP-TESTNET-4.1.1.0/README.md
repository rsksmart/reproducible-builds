# powpeg-node HOP-TESTNET-4.1.1.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-TESTNET-4.1.1.0`

## Build

```
$ docker build -t powpeg-node/hop-testnet-4.1.1.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-testnet-4.1.1.0 bash -c 'sha256sum *'
4b63b293ed2b57d7a44cd535ac6d5121d836ebc13c5e0b6f13613ce9f51ce031  federate-node-HOP-TESTNET-4.1.1.0-all.jar
038ffcabd3a5231730854de0e9a4110a7da838954a9784a3e7c9113ce40f49e5  federate-node-HOP-TESTNET-4.1.1.0-javadoc.jar
6979d35b8a4eb88c7744bb1017c2cb8c691bc9707280fc8b76521f7d20a9f3e0  federate-node-HOP-TESTNET-4.1.1.0-sources.jar
8b6979a82ae59d925c64837acf684ed1ba6383ba1c03c61b22eb101e2d3fab5a  federate-node-HOP-TESTNET-4.1.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-testnet-4.1.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
