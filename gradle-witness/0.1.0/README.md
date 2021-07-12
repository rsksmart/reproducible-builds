# Gradle Witness 0.1.0

* Source: https://github.com/rsksmart/gradle-witness
* Tag: `v0.1.0`

## Build

```
$ docker build -t gradle-witness-010-reproducible .
```

## Verify

```
$ docker run --rm gradle-witness-010-reproducible sha256sum /code/gradle-witness/build/libs/gradle-witness-0.1.0.jar
592d13294c988a0ad5bc0c9bb1b33b946914abb14e5472dfebaa52da9c7bdd50  /code/gradle-witness/build/libs/gradle-witness-0.1.0.jar
```

## (Optional) Extract JAR from image

```
$ docker run --name temp-container gradle-witness-010-reproducible /bin/true
$ docker cp temp-container:/code/gradle-witness/build/libs/gradle-witness-0.1.0.jar gradle-witness-0.1.0.jar
$ docker rm temp-container
```

