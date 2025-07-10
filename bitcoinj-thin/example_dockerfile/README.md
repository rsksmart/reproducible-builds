# New Dockerfile format
This folder contains a Dockerfile for building a bitcoinj-thin inside a docker container.
The old openjdk base image was deprecated, so this Dockerfile uses a base ubuntu image instead and just installs 
java 8 on it. The old base image was based on debian buster, so it wouldn't let you install any packages. Newer openjdk images
don't have java 8 variants, so we use the ubuntu image instead.

# Continuous Deployment
A github action has been added to automatically build the image and push the extracted files to the rsk-repository bucket on S3.
For this to work, you need to create and push a tag in the format `bitcoinj-thin-<version>`, where `<version>` is the version of bitcoinj-thin you want to build. Don't forget of course to include the proper bitcoinj-thin/<version> directory with the corresponding Dockerfile.
