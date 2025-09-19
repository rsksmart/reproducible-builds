# powpeg-node REED-8.0.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `REED-8.0.0.1`

## Build

```
$ docker build -t powpeg-node/reed-8.0.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/reed-8.0.0.1 bash -c 'sha256sum * | grep -v javadoc.jar'
89a1578d6a63eece3482ed3855927759ce3b49370b06807351d9a3ef19e45db7  federate-node-REED-8.0.0.1-all.jar
bbd7c9b0c87dd0f925c7b1803fe8c806fc94543e7d206678f050fffeb6e4a4bc  federate-node-REED-8.0.0.1.jar
c232252efd2316e35a0d046dd2843ee633a4208f983897e6d208b8610a00d645  federate-node-REED-8.0.0.1-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/reed-8.0.0.1 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
