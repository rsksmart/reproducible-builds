# rskj LOVELL-7.0.0

* Source: https://github.com/rsksmart/rskj
* Tag: `LOVELL-7.0.0`

## Build

```
$ docker build -t rskj/7.0.0-lovell .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/7.0.0-lovell sh -c 'sha256sum * | grep -v javadoc.jar'
604b75665d9750da216ddc9849cb2276a06192321b3c6829685600e1f2d534fb  rskj-core-7.0.0-LOVELL-all.jar
05fb616708088a6c65326c01d7e79b2c332d5f2ca83246c9075f65e5fa2781fe  rskj-core-7.0.0-LOVELL-sources.jar
8d131bbc8d1d346ec4a91ce4eb9db59f6c7649bb7698b11bc1abbaf33f75caaa  rskj-core-7.0.0-LOVELL.jar
e85d0783b39ef93fda5f98588f7e4ae5d57784096ce9b3a1f43eb3d99a49d275  rskj-core-7.0.0-LOVELL.module
d651adc77b82046a976bf5c7e858b741443bc8ffa8372b8e5bac9b92dc8c294d  rskj-core-7.0.0-LOVELL.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/7.0.0-lovell
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/7.0.0-lovell /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
