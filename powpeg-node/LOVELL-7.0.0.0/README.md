# powpeg-node LOVELL-7.0.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `LOVELL-7.0.0.0`

## Build

```
$ docker build -t powpeg-node/lovell-7.0.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/lovell-7.0.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
7ea05a089d89a28f618475167be5ed07acdc4cc45de2e2e03af375c74345f6de  federate-node-LOVELL-7.0.0.0-all.jar
86bfff23a280ca7e139416e185109f487592ecbbcc8e2639536009fac0f0f12b  federate-node-LOVELL-7.0.0.0.jar
59f5010f7563b853f8a38b7f80050aa896b5708169afd9ca90ed435d3426b847  federate-node-LOVELL-7.0.0.0-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/lovell-7.0.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
