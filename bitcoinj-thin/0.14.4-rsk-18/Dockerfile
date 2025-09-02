FROM eclipse-temurin:8u412-b08-jdk-jammy AS builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends file unzip maven git strip-nondeterminism

WORKDIR /code/bitcoinj-thin

RUN gitrev=v0.14.4-rsk-18 && \
    git init && \
    git remote add origin https://github.com/rsksmart/bitcoinj-thin.git && \
    git fetch --depth 1 origin tag "$gitrev" && \
    git checkout "$gitrev"

RUN mvn clean package -DskipTests
RUN strip-nondeterminism ./target/bitcoinj-thin-*

FROM eclipse-temurin:8u412-b08-jdk-jammy as runner

RUN useradd -m rsk

WORKDIR /home/bitcoinj-thin

USER rsk
COPY --from=builder --chown=rsk:rsk /code/bitcoinj-thin/* ./
