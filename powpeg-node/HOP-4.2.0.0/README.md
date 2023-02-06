# powpeg-node HOP-4.2.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.2.0.0`

## Build

```
$ docker build -t powpeg-node/hop-4.2.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.2.0.0 bash -c 'sha256sum *'
e1e6f59376c5ca2f3d63ced12822696f98f52a65616283bf4211c24786513592  federate-node-HOP-4.2.0.0-all.jar
1b481555f34e3ab5c2b8dd254a3aeb012e581daba15d2fdfec0a23045a5a1bea  federate-node-HOP-4.2.0.0-javadoc.jar
d10ce12a34947c6dc1b27d9f8303de35874473561b6214a859b1b1dec393b51f  federate-node-HOP-4.2.0.0-sources.jar
dbbc351c791ca4ce9c69ea6725874bdf511cb17a08c34834efa86edec6f249df  federate-node-HOP-4.2.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.2.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
