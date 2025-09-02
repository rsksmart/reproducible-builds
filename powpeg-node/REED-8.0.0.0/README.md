# powpeg-node REED-8.0.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `REED-8.0.0.0`

## Build

```
$ docker build -t powpeg-node/reed-8.0.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/reed-8.0.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
d8e5a1f8e87e1376ab767629de2a50909c5d2c5f40aa32147a31b72638e90bcb  federate-node-REED-8.0.0.0-all.jar
e66d6d9f5a23aa85264fd72a1b0c62b5b81d837b979112adf89aade79245081e  federate-node-REED-8.0.0.0.jar
1cc61325f75531eda0cc1db97c1fd43a0bba84927675bcbb3a0e012490c63200  federate-node-REED-8.0.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/reed-8.0.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
