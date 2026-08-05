# rskj VETIVER-9.0.4

* Source: https://github.com/rsksmart/rskj
* Tag: `VETIVER-9.0.4`

## Build

```
$ docker build -t rskj/9.0.4-vetiver .
```

## Verify

Run the following command to verify the sha256sum of the built artifacts matches the expected values:

```
$ docker run --rm rskj/9.0.4-vetiver sh -c 'sha256sum * | grep -v javadoc.jar'
79c2ea69c91092d6804dea75012d03e40057b11b1894783cd4923fd401f7c064  rskj-core-9.0.4-VETIVER-all.jar
8ecbe77ec07665c666ad4c1b4dfc32d2642d4603475a6c99a4f17540f9f13367  rskj-core-9.0.4-VETIVER-sources.jar
6190d64ee7cfcf66345b4bd8b70e7d64a97f24995b89952038a148d56998aa4a  rskj-core-9.0.4-VETIVER.jar
7d7fb1870ce397e8a375ce375b31f9448d7af1444cb8899e8d2e6e16a510128c  rskj-core-9.0.4-VETIVER.module
df341067d744cfb42e31be8b8301f8af608d83492bd7282b51af144e47152fce  rskj-core-9.0.4-VETIVER.pom
```

## (Optional) Run RSK Node
```
$ docker run -d rskj/9.0.4-vetiver
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/9.0.4-vetiver /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
