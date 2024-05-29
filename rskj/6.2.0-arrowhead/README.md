# rskj ARROWHEAD-6.2.0

* Source: https://github.com/rsksmart/rskj
* Tag: `ARROWHEAD-6.2.0`

## Build

```
$ docker build -t rskj/6.2.0-arrowhead .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/6.2.0-arrowhead sh -c 'sha256sum * | grep -v javadoc.jar'
276e66e411a44f25ce9f4f4b97ada4c5584c7b6d5d6c0871d5e7e6515ec31b43  rskj-core-6.2.0-ARROWHEAD-all.jar
b8152c66466c12ff41b41603a37279cd88730d1faa642b3544d9290c89d7cc2d  rskj-core-6.2.0-ARROWHEAD-sources.jar
b2ab2778b1a14bf44b82c82816b4b16fe6dc5e74def66786a5c084a6e0e00fb8  rskj-core-6.2.0-ARROWHEAD.jar
6eac0bd22ae6e36424d281582bea25369dc7b11156395cebe7ddef70164c1850  rskj-core-6.2.0-ARROWHEAD.module
d49ed2a57577099471ce8e7c516b9526a85948a3333501a4afba7157b0f803fb  rskj-core-6.2.0-ARROWHEAD.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/6.2.0-arrowhead
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/6.2.0-arrowhead /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
