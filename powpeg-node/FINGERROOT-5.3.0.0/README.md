# powpeg-node FINGERROOT-5.3.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Branch: `FINGERROOT-5.3.0.0`

## Build

```
$ docker build -t powpeg-node/fingerroot-5.3.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/fingerroot-5.3.0.0 bash -c 'sha256sum *'
0decbcd3be79e4bf5287f3616ef1718c1d48479b8ec4d571cd0c4916b988970b  federate-node-FINGERROOT-5.3.0.0-all.jar
6633f84cc85cd856cd71675a1034f91a676719266166bb5fdfb0ed3df51997d9  federate-node-FINGERROOT-5.3.0.0-javadoc.jar
27ce904a2e44ec77581fb90a60fb1334db510a2e9283500a9aa16b93bd603514  federate-node-FINGERROOT-5.3.0.0-sources.jar
c7271e5972308d6261d63f2b1957d787e07b71b7151d313cab374591cb483dcf  federate-node-FINGERROOT-5.3.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/fingerroot-5.3.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
