# powpeg-node HOP-4.3.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.3.0.0`

## Build

```
$ docker build -t powpeg-node/hop-4.3.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.3.0.0 bash -c 'sha256sum *'
d9acc0536ff901617dcaaa3deadbd853b19d96a7947da016dde6d838326b3531  federate-node-HOP-4.3.0.0-all.jar
a55f1e5b8a4f5145c57adbd8b430b322b26555ffd6b90a9f4547478316f0629e  federate-node-HOP-4.3.0.0-javadoc.jar
6b23ee3820e104ff32461ee796824ab7804fa118bd9f2d2cdea885f1ebd60fb2  federate-node-HOP-4.3.0.0-sources.jar
d64337c71ba7d796cc4af88ac2243621e5aeb37ec02dddebc20f5c7bad37750d  federate-node-HOP-4.3.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.3.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
