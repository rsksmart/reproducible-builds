# rskj VETIVER-9.0.2

* Source: https://github.com/rsksmart/rskj
* Tag: `VETIVER-9.0.2`

## Build

```
$ docker build -t rskj/9.0.2-vetiver .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/9.0.2-vetiver sh -c 'sha256sum * | grep -v javadoc.jar'
9a46e412812bb6661f8af74fa77f3fb089ba4cd9695951789a3b89d6f90b777e  rskj-core-9.0.2-VETIVER-all.jar
0749f277eb7a9dfa7707b2a3a91342176daf311dc5f6ed2435e845844795f178  rskj-core-9.0.2-VETIVER-sources.jar
e07b5da8832ea5dce2a71a79b7eec2e4627d1ef27b7031dc27297805ce56de21  rskj-core-9.0.2-VETIVER.jar
b9db56e6d5a3cf74d040c567566d227048ff3f04df84741c6641e86a91ca2e73  rskj-core-9.0.2-VETIVER.module
a6d2b797ff8f114c44d90a565c25384ab8737b2ea8d373a1b6644f04d9e5f2a7  rskj-core-9.0.2-VETIVER.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/9.0.2-vetiver
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/9.0.2-vetiver /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
