# powpeg-node HOP-4.0.1.1-rc

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `HOP-4.0.1.1-rc`

## Build

```
$ docker build -t powpeg-node/hop-4.0.1.1-rc .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.0.1.1-rc bash -c 'sha256sum *'
b254e07f7a8c5dfc54f1ef3801eb8b6c927f8824e53558893b315e77bbfc9843  federate-node-RC-4.0.1.1-all.jar
2af38c3f4bb18756077591b2810f18150dc25b4b7ee2c4abc0a5289f9f63ae5e  federate-node-RC-4.0.1.1-javadoc.jar
045ea7fb206412a7554a8c4c9a0dc6ac025b912eff9ef51583d2b7f7a30b4181  federate-node-RC-4.0.1.1-sources.jar
163bb979bd27a124a23c9555844df02fb31cc82ca28a91cfb6d044e2316ae4bf  federate-node-RC-4.0.1.1.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.0.1.1-rc /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
