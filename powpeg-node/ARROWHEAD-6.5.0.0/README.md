# powpeg-node ARROWHEAD-6.5.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `ARROWHEAD-6.5.0.0`

## Build

```
$ docker build -t powpeg-node/arrowhead-6.5.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/arrowhead-6.5.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
819d1aca676c5950ca6dcea97fee3940961b550c4b315ad4e892892b02886b94  federate-node-ARROWHEAD-6.5.0.0-all.jar
2126c99cd19c75f7a6e3c1fa0b8d373dbaaef4f797250f437415e95610d68068  federate-node-ARROWHEAD-6.5.0.0.jar
b59bef9e47a846df0388a531131e9b1c87de241442a874351302e14fcc7d25b7  federate-node-ARROWHEAD-6.5.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/arrowhead-6.5.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
