FROM ubuntu:18.04

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends git curl openjdk-8-jdk=8u232-b09-0ubuntu1~18.04.1 

WORKDIR /code/native

RUN git clone --single-branch --depth 1 --branch 1.0.0 https://github.com/rsksmart/native.git /code/native

RUN ./gradlew --no-daemon clean build -x test

RUN sha256sum build/libs/*
