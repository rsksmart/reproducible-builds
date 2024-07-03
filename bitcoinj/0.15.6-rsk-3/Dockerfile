FROM openjdk:8-jdk-slim-buster as builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends file unzip maven git strip-nondeterminism

WORKDIR /code/bitcoinj

RUN gitrev=v0.15.6-rsk-3 && \
    git init && \
    git remote add origin https://github.com/rsksmart/bitcoinj.git && \
    git fetch --depth 1 origin tag "$gitrev" && \
    git checkout "$gitrev"

RUN ./gradlew clean build -x test
RUN strip-nondeterminism ./core/build/libs/*

FROM openjdk:8-jre-slim-buster as runner

RUN useradd -m rsk

WORKDIR /home/bitcoinj

USER rsk
COPY --from=builder --chown=rsk:rsk /code/bitcoinj/core/build/libs/bitcoinj-core-* ./
