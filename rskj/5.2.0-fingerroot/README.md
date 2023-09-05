# rskj FINGERROOT-5.2.0

* Source: https://github.com/rsksmart/rskj
* Tag: `FINGERROOT-5.2.0`

## Build

```
$ docker build -t rskj/5.2.0-fingerroot .
```

## Verify

The last step of the build prints the sha256sum of the files, if, for any reason there's a need to recheck the hash the following commands can be used to generate them.

```
$ docker run --rm rskj/5.2.0-fingerroot sh -c 'sha256sum * | grep -v javadoc.jar'
70ae5209720ad6477c1c32d8a8d94e29ebb0db25d57e9903546519d614eddf9f  rskj-core-5.2.0-FINGERROOT-all.jar
6ed2bcb287e6b9e61bb99b65307e2e51b4231a92070fed4569443981fc2597ce  rskj-core-5.2.0-FINGERROOT-sources.jar
3b1dd7d624137fb1bcc133927a7357eed3228457e8db29f17cf0a193370bbe12  rskj-core-5.2.0-FINGERROOT.jar
4d588eae64108680c6ae6e895e2d6d4a07cdd05a31718d6f4a34870153a51d5a  rskj-core-5.2.0-FINGERROOT.module
3903f17a97e7dbd55bac0dd02030f5297e364280e2b7a856aaf03b4d327dce3c  rskj-core-5.2.0-FINGERROOT.pom
```
## (Optional) Run RSK Node
```
$ docker run -d rskj/5.2.0-fingerroot
```

## (Optional) Extract JAR from image

```
$ cid=$(docker run -d rskj/5.2.0-fingerroot /bin/true)
$ docker cp "$cid":/home/rsk/ ./libs/
$ docker rm "$cid"
```
