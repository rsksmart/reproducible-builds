# albn128 1.0.0

* Source: https://github.com/rsksmart/native
* Tag: `1.0.0`

## Build

```
$ docker build -t altbn128-1.0.0-reproducible .
```

The build will print a hash. It should match
```
9de3f2efe3e0686734b79e41d8a0f8ea2c1e4f3e3d2c6ddcd10e3b60b5f973ca  src/jni/libbn128.so
```

If you had already generated this reproducible build prior to its retag, please add `--no-cache` parameter to the build command to ensure the image regeneration. 


## Verify

If you want to verify the hash without rebuilding the image
```
$ docker run --rm altbn128-1.0.0-reproducible sha256sum /code/altbn128/src/jni/libbn128.so
9de3f2efe3e0686734b79e41d8a0f8ea2c1e4f3e3d2c6ddcd10e3b60b5f973ca  src/jni/libbn128.so
```

## (Optional) Extract the library from image

```
$ docker run --name temp-container altbn128-1.0.0-reproducible /bin/true
$ docker cp temp-container://code/rskj/code/altbn128/src/jni/libbn128.so ./libbn128.so
$ docker rm temp-container
```
