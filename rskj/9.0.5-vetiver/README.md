# rskj VETIVER-9.0.5

* Source: https://github.com/rsksmart/rskj
* Tag: `VETIVER-9.0.5`

## Build

```
$ docker build -t rskj/9.0.5-vetiver .
```

## Verify

Run the following command to verify the sha256sum of the built artifacts matches the expected values:

```
$ docker run --rm rskj/9.0.5-vetiver sh -c 'sha256sum * | grep -v javadoc.jar'
d770abbf3331b0994c1e86b33ae877c7274658b10143be92a47f0a63d5f1098e  rskj-core-9.0.5-VETIVER-all.jar
a396586c16c093da476acc95d81fa00e484d8176e68aefb973778edf288f3956  rskj-core-9.0.5-VETIVER-sources.jar
82d7dd06f501912fc35a95311a7bd18a6fbdf26ff000af013cff413a1c87001e  rskj-core-9.0.5-VETIVER.jar
57381e7dd85e8edf81a2f450edc0b24eb17624e959cf517a99f5533471f760ea  rskj-core-9.0.5-VETIVER.module
f394d529b4f6f9fae190c5200c47f317693e05f9bbb4822b2286e7d72ce5c057  rskj-core-9.0.5-VETIVER.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/9.0.5-vetiver
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/9.0.5-vetiver /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
