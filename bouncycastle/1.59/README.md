# BouncyCastle 1.59

* Source: https://github.com/bcgit/bc-java
* Tag: `r1rv59`

## Build

```
$ docker build -t bouncycastle-r1rv59-reproducible .
```

## Verify

```
$ docker run --rm bouncycastle-r1rv59-reproducible sha256sum /code/bc-java/build/artifacts/jdk1.5/jars/bclcrypto-jdk15on-159.jar
7d03ba37df4d0ddc4ea40d56554324c6f18062a930edadb0a1b3acbbbea28efc  /code/bc-java/build/artifacts/jdk1.5/jars/bclcrypto-jdk15on-159.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container bouncycastle-r1rv59-reproducible /bin/true
$ docker cp temp-container:/code/bc-java/build/artifacts/jdk1.5/jars/bclcrypto-jdk15on-159.jar ./bclcrypto-jdk15on-159.jar
$ docker rm temp-container
```

