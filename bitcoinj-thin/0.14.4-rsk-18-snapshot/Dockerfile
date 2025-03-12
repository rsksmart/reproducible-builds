FROM openjdk:8-jdk-slim-buster as builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends file unzip maven git strip-nondeterminism

WORKDIR /code/bitcoinj-thin

RUN gitrev=segwit_compatible_powpeg_integration && \
    git init && \
    git remote add origin https://github.com/rsksmart/bitcoinj-thin.git && \
    git fetch --depth 1 origin "$gitrev" && \
    git checkout "$gitrev"

RUN mvn clean package -DskipTests
RUN strip-nondeterminism ./target/bitcoinj-thin-*

FROM openjdk:8-jre-slim-buster as runner

RUN useradd -m rsk

WORKDIR /home/bitcoinj-thin

USER rsk
COPY --from=builder --chown=rsk:rsk /code/bitcoinj-thin/* ./
