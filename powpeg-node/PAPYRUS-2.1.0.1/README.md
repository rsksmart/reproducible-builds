# powpeg-node PAPYRUS-2.1.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `PAPYRUS-2.1.0.1`

## Build

```
$ docker build -t powpeg-node/papyrus-2.1.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```docker run --rm powpeg-node/papyrus-2.1.0.1 bash -c 'sha256sum /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1{.jar,-all.jar,-sources.jar}'
0540c818ebfbfa29b485b83cb8d206f045e6ad63595313470a25abed36c5ba4f  /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1.jar
6e280ac7ecb09ad8a658bb5ba128002fb213160c680a94c3bb8a95ac043c712b  /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1-all.jar
872894a0dbdf0af52e02d4dd930cb7b2b3f471fe45fa2ec23daf37ddf899cab8  /code/powpeg-node/build/libs/federate-node-PAPYRUS-2.1.0.1-sources.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/papyrus-2.1.0.1 /bin/true)
$ docker cp "$cid":/code/powpeg-node/build/libs/ ./libs/
$ docker rm "$cid"
```
