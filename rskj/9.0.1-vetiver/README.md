# rskj VETIVER-9.0.1

* Source: https://github.com/rsksmart/rskj
* Tag: `VETIVER-9.0.1`

## Build

```
$ docker build -t rskj/9.0.1-vetiver .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/9.0.1-vetiver sh -c 'sha256sum * | grep -v javadoc.jar'
ffa9ada4e58ede93b342171ce635392f99315b744efbf251bda2fb2cd18da3bb  rskj-core-9.0.1-VETIVER-all.jar
d21a454cf8b16624db23cc4de210840567f3980685046602f9cb44b79085bb49  rskj-core-9.0.1-VETIVER-sources.jar
cc80674ba45588f56bd67a7661f577842cd55661cef89a05b6baa99180381171  rskj-core-9.0.1-VETIVER.jar
d2f76bc758ea000cbb9259bd19854bcf4e498004bf68a8aad51f8c6c3839593a  rskj-core-9.0.1-VETIVER.module
481b7d6aca96ec2c4c281e8e9558a8df6bd47e3ffab443399ee4b0d7bb1873b5  rskj-core-9.0.1-VETIVER.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/9.0.1-vetiver
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/9.0.1-vetiver /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
