# powpeg-node HOP-4.0.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.0.0.1`

## Build

```
$ docker build -t powpeg-node/hop-4.0.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.0.0.1 bash -c 'sha256sum *'
0ccda011710abd587c4e2c43a0b6ca979ba62497ec20d5f747be01a961b84719  federate-node-HOP-4.0.0.1-all.jar
c4062c637b2ff0c3b6d386ac9f3ca37d8edeea6da8100fae148811a7d7b7e220  federate-node-HOP-4.0.0.1-javadoc.jar
d19539d810db754827ea92a4fb14971af7b9453b62b48aa3afbcea4806425374  federate-node-HOP-4.0.0.1-sources.jar
931bd252b25aeff663375eb5d55cf1783ab0eb549cbfef383d5a5d8e894ba3f8  federate-node-HOP-4.0.0.1.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.0.0.1 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
