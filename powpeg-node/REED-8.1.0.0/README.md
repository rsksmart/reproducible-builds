# powpeg-node REED-8.1.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `REED-8.1.0.0`

## Build

```
$ docker build -t powpeg-node/reed-8.1.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/reed-8.1.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
806621920bf025c5b734bbecc91a94832f63bf0bc1fed43365e969256e276966  federate-node-REED-8.1.0.0-all.jar
9bedbfc8fab75130a45941aeb6dbc6a55a7a6eeee60f6682544495fecbc2cf21  federate-node-REED-8.1.0.0.jar
d9bab5ef88250d74e1acf22ff9c1d2afaa35b0cefbd7a72a175a71f7131401d8  federate-node-REED-8.1.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/reed-8.1.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
