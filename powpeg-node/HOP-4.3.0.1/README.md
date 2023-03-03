# powpeg-node HOP-4.3.0.1

* Source: https://github.com/rsksmart/powpeg-node
* Tag: `HOP-4.3.0.1`

## Build

```
$ docker build -t powpeg-node/hop-4.3.0.1 .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm powpeg-node/hop-4.3.0.1 bash -c 'sha256sum *'
b88b7f81277e3cd774a06f64c8a54cba727692ae3e6c19520e4516203fec1a76  federate-node-HOP-4.3.0.1-all.jar
96755269ec1996e8c59291e26eed1f7bcdccd284dc6e7fbf58d5f449167e7545  federate-node-HOP-4.3.0.1-javadoc.jar
3befbd0f23d084aade4b560c4375d548ea58de3715b82a1b5fc8a1fbdb68ebfb  federate-node-HOP-4.3.0.1-sources.jar
ec786277cc8b41752b412a42a3482fd80ed1832902adcdab2da78c35925af87e  federate-node-HOP-4.3.0.1.jar
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d powpeg-node/hop-4.3.0.1 /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
