# weUPnP 0.1.4

* Source: https://github.com/bitletorg/weupnp
* Tag: `weupnp-0.1.4`

## Build

```
$ docker build -t weupnp-0.1.4-reproducible .
```

## Verify

```
$ docker run --rm weupnp-0.1.4-reproducible sha256sum /code/weupnp/target/weupnp-0.1.4.jar
06b4e3ba161b9248d347e747c2a814e687be0de33ffd1ae88511bb4726e83ee6  /code/weupnp/target/weupnp-0.1.4.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container weupnp-0.1.4-reproducible /bin/true
$ docker cp temp-container:/code/weupnp/target/weupnp-0.1.4.jar ./weupnp-0.1.4.jar
$ docker cp temp-container:/code/weupnp/pom.xml ./weupnp-0.1.4-reproducible.pom
$ docker rm temp-container
```
