# powpeg-node HOP-4.4.0.0

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.4.0.0`

## Build

```
$ docker build -t powpeg-node/hop-4.4.0.0 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.4.0.0 bash -c 'sha256sum *'
ffbe05f7655d941e890afa4ae255d49a30a0ab0ed4a80c62196dfc46cf320629  federate-node-HOP-4.4.0.0-all.jar
86ce65ba0ace89ada7a520ba6c8d2bb79406aa1dce3b60bbedf4d0f5a39b5d7d  federate-node-HOP-4.4.0.0-javadoc.jar
9024f3333c01956df3083df52e64fa5159b60e00f941cb4fe91c264ceedbc585  federate-node-HOP-4.4.0.0-sources.jar
0ea8174bb6236e409fddf9cce3295d10f99dc1b4186c07ac39aba364508a9a37  federate-node-HOP-4.4.0.0.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.4.0.0 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
