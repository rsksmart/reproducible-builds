# powpeg-node ARROWHEAD-6.3.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `ARROWHEAD-6.3.0.0`

## Build

```
$ docker build -t powpeg-node/arrowhead-6.3.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/arrowhead-6.3.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
69b1f337c6914ec9aa8dff47398c0bbf6b45d4756ec2f9add889eac72148b80b  federate-node-ARROWHEAD-6.3.0.0-all.jar
5a012556eaea744f7348d37b233094681de680465405d7e675379b05e86706be  federate-node-ARROWHEAD-6.3.0.0-sources.jar
fc25770b9f21f3a260d3c18525eb5c56482ac724f49306b394c68dfdf2daa1f2  federate-node-ARROWHEAD-6.3.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/arrowhead-6.3.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
