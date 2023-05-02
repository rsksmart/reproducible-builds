# powpeg-node HOP-4.4.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.4.0.0`

## Build

```
$ docker build -t powpeg-node/hop-4.4.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.4.0.0 bash -c 'sha256sum *'
efd91f8c058930dbb700a4fe52cd1d33669aa522eb3d4ff82796da14e9fe35be  federate-node-HOP-4.4.0.0-all.jar
9a1ee39ede175755b0a30045a7189b7d44cc3c8177357f3ebbe88592ce27b4c4  federate-node-HOP-4.4.0.0-javadoc.jar
3ccfa7d25674d12e90b731acb73d717a78aef723be78efdf47dc55d9930ff018  federate-node-HOP-4.4.0.0-sources.jar
719c03b860567950805692532869711b2216f28e8211e091836a85be72c8f5a0  federate-node-HOP-4.4.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.4.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
