# powpeg-node HOP-TESTNET-4.0.1.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-TESTNET-4.0.1.0`

## Build

```
$ docker build -t powpeg-node/hop-testnet-4.0.1.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-testnet-4.0.1.0 bash -c 'sha256sum *'
9780d254cda66b6ec7856b849bd60ccd73cd5445af053332cdf3cf492ef042e3  federate-node-HOP-TESTNET-4.0.1.0-all.jar
ff12891c239d014a582c1f72bf35253779434e562f9ca5d9b9c6f419c0ef2507  federate-node-HOP-TESTNET-4.0.1.0-javadoc.jar
b6814a43a18e833d362b365193a9565c0d9280990126e78fc39fe4c90defac10  federate-node-HOP-TESTNET-4.0.1.0-sources.jar
0072070dcb98e64d3a3f83429634f5ab4c71460a76505e158e4cd043486bf60a  federate-node-HOP-TESTNET-4.0.1.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-testnet-4.0.1.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
