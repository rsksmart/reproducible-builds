FROM eclipse-temurin:8u412-b08-jdk-jammy AS builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends file unzip maven git strip-nondeterminism

WORKDIR /code/bitcoinj

RUN gitrev=testnet4-bitcoin-testnet4-setup && \
    git init && \
    git remote add origin https://github.com/rsksmart/bitcoinj.git && \
    git fetch --depth 1 origin "$gitrev" && \
    git checkout "$gitrev"

RUN ./gradlew clean build -x test
RUN strip-nondeterminism ./core/build/libs/*

FROM eclipse-temurin:8u412-b08-jre-jammy AS runner

RUN useradd -m rsk

WORKDIR /home/bitcoinj

USER rsk
COPY --from=builder --chown=rsk:rsk /code/bitcoinj/core/build/libs/bitcoinj-core-* ./
