# rskj LOVELL-7.1.0

* Source: https://github.com/rsksmart/rskj
* Tag: `LOVELL-7.1.0`

## Build

```
$ docker build -t rskj/7.1.0-lovell .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/7.1.0-lovell sh -c 'sha256sum * | grep -v javadoc.jar'
1a6168d4f35059b875904b1d50292d0c13c7cce6497c568a15b3c83e00ace701  rskj-core-7.1.0-LOVELL-all.jar
4942e28d1e390c72ae649fdfc2680f4b852a59a47a4b93923c2a8aede9385cb3  rskj-core-7.1.0-LOVELL-sources.jar
b0818a4359bf2d84e0d823d2c0e24e8d958bdbc42701b496d7257288978f8fd4  rskj-core-7.1.0-LOVELL.jar
0966ae00fdc522e71d72d18a55e1b6df07d77de24fa90ce205d16f927118787f  rskj-core-7.1.0-LOVELL.module
0b74d693f39f75906ab13d4ebbe0a36ae82c43d5e0fc84dbdbb5f8f9e1130fec  rskj-core-7.1.0-LOVELL.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/7.1.0-lovell
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/7.1.0-lovell /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
