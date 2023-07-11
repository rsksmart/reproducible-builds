# powpeg-node FINGERROOT-5.0.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `FINGERROOT-5.0.0.1`

## Build

```
$ docker build -t powpeg-node/fingerroot-5.0.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/fingerroot-5.0.0.1 bash -c 'sha256sum *'
f1b5a8d64191814f6fa83240228bab9fa31f2663157f92cb42f41cbaf6fc56e1  federate-node-FINGERROOT-5.0.0.1-all.jar
f354ada3d0fc427913969cd5afd3815761b4469dd0f4243c3175d79a9a0db614  federate-node-FINGERROOT-5.0.0.1-javadoc.jar
2d4590c78b30140576271552daf87d8cc8fbf47bd80a6a30ee98320607b0c7d7  federate-node-FINGERROOT-5.0.0.1-sources.jar
1e18b49650c400e45d7f6bd2867fa748fde43c9560fd2a5253be55d94289e23f  federate-node-FINGERROOT-5.0.0.1.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/fingerroot-5.0.0.1 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
